import express from "express"
import path from "path"
import fs from "fs"
import { fileURLToPath } from "url"
import multer from "multer"
import sharp from "sharp"
import db from "../models/index.mjs"
import isAuth from "../middleware/auth.mjs"

const router = express.Router()
const File = db.File

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Ensure uploads directory exists
const uploadDir = path.join(__dirname, '..', 'uploads')
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true })
}

const storage = multer.memoryStorage()
const upload = multer({
  storage: storage,
  limits: { fileSize: 10 * 1024 * 1024 } // 10MB limit
})

router.get("/", (req, res) => {
  const { page = 1, limit = 15, search = "", use_as } = req.query;
  const offset = (page - 1) * limit;
  const { Op } = db.Sequelize;

  const where = {};

  if (search) {
    where[Op.or] = [
      { original_name: { [Op.like]: `%${search}%` } },
      { stored_name: { [Op.like]: `%${search}%` } }
    ];
  }

  if (use_as) {
    where.use_as = use_as;
  }
  File.findAndCountAll({
    where,
    limit: parseInt(limit),
    offset: parseInt(offset),
    order: [['createdAt', 'DESC']]
  })
    .then(result => res.json({
      data: result.rows,
      total: result.count,
      page: parseInt(page),
      totalPages: Math.ceil(result.count / limit)
    }))
    .catch(err => res.status(500).json({ error: err.message }))
})

router.get("/:id", (req, res) => {
  File.findByPk(req.params.id)
    .then(file => res.json(file))
    .catch(err => res.status(500).json({ error: err.message }))
})

router.post("/", isAuth, upload.single('file'), async (req, res) => {
  try {
    if (req.file) {
      const original_name = req.file.originalname;
      const filename = "cfp" + "_" + Math.round(Math.random() * 1E6) + ".webp";
      const outputPath = path.join(uploadDir, filename);

      await sharp(req.file.buffer)
        .resize(1080, 1080, { fit: 'inside', withoutEnlargement: true })
        .webp({ quality: 80 })
        .toFile(outputPath);

      const fileData = {
        original_name: original_name,
        stored_name: filename,
        path: `/uploads/${filename}`, 
        mime_type: req.file.mimetype,
        size: req.file.size,
        description: req.body.description,
        use_as: req.body.use_as,
        uploaded_by: req.user?.id
      };

      if (!fileData.uploaded_by) {
        throw new Error("Authenticated user ID not found. Please re-login.");
      }

      console.log("Saving file record to DB...", fileData);
      const file = await File.create(fileData);
      return res.json(file);
    } else if (req.body.url) {
      const file = await File.create(req.body);
      return res.json(file);
    } else {
      console.warn("Upload request received without file or URL");
      return res.status(400).json({ error: "Aucun fichier n'a ete selectionne" });
    }
  } catch (err) {
    console.error("Upload error details:", err);
    res.status(500).json({
      error: "Internal Server Error during upload",
      details: err.message,
      stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
    });
  }
})

router.patch("/:id", isAuth, (req, res) => {
  File.findByPk(req.params.id)
    .then(file => {
      if (!file) return res.status(404).json({ error: "File not found" });
      file.update(req.body)
        .then(file => res.json(file))
        .catch(err => res.status(500).json({ error: err.message }))
    })
    .catch(err => res.status(500).json({ error: err.message }))
})

router.delete("/:id", isAuth, (req, res) => {
  File.findByPk(req.params.id)
    .then(file => {
      if (!file) return res.status(404).json({ error: "File not found" });
      file.destroy()
        .then(result => res.json({ success: true, data: result }))
        .catch(err => res.status(500).json({ error: err.message }))
    })
    .catch(err => res.status(500).json({ error: err.message }))
})

export default router