import express from "express"
const router = express.Router()
import db from "../models/index.mjs"
import isAuth from "../middleware/auth.mjs"

const Article = db.Article
const File = db.File
const Filiere = db.Filiere
const Service = db.Service
const User = db.User

router.get("/", (req, res) => {
  const { page = 1, limit = 15, search = "" } = req.query;
  const offset = (page - 1) * limit;
  const { Op } = db.Sequelize;

  const where = search ? {
    [Op.or]: [
      { title: { [Op.like]: `%${search}%` } },
      { slug: { [Op.like]: `%${search}%` } }
    ]
  } : {};

  Article.findAndCountAll({
    where,
    limit: parseInt(limit),
    offset: parseInt(offset),
    order: [['createdAt', 'DESC']],
    include: [
      { model: File, as: 'heroImage', attributes: ["id", "path", "original_name", "mime_type"] },
      { model: Filiere, as: "filiere", attributes: ["id", "name", "slug"] },
      { model: Service, as: "service", attributes: ["id", "name", "slug"] },
      { model: User, as: "author", attributes: ["id", "name", "email"] },
      { model: File, as: 'contentFiles', attributes: ["id", "path", "original_name", "mime_type"], through: { attributes: [] } }
    ]
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
  Article.findByPk(req.params.id, {
    include: [
      { model: File, as: 'heroImage', attributes: ["id", "path", "original_name", "mime_type"] },
      { model: Filiere, as: "filiere", attributes: ["id", "name", "slug"] },
      { model: Service, as: "service", attributes: ["id", "name", "slug"] },
      { model: User, as: "author", attributes: ["id", "name", "email"] },
      { model: File, as: 'contentFiles', attributes: ["id", "path", "original_name", "mime_type"], through: { attributes: [] } }
    ]
  })
    .then(article => res.json(article))
    .catch(err => res.status(500).json({ error: err.message }))
})

router.get("/slug/:slug", (req, res) => {
  Article.findOne({
    where: { slug: req.params.slug },
    include: [
      { model: File, as: 'heroImage', attributes: ["id", "path", "original_name", "mime_type"] },
      { model: Filiere, as: "filiere", attributes: ["id", "name", "slug"] },
      { model: Service, as: "service", attributes: ["id", "name", "slug"] },
      { model: User, as: "author", attributes: ["id", "name", "email"] },
      { model: File, as: 'contentFiles', attributes: ["id", "path", "original_name", "mime_type"], through: { attributes: [] } }
    ]
  })
    .then(article => {
      if (!article) return res.status(404).json({ message: "Article not found" });
      res.json(article);
    })
    .catch(err => res.status(500).json({ error: err.message }))
})

router.post("/", isAuth, (req, res) => {
  const articleData = {
    ...req.body,
    author_id: req.user.id
  }

  if (!articleData.slug && articleData.title) {
    articleData.slug = articleData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
  }

  Article.create(articleData)
    .then(article => res.json(article))
    .catch(err => res.status(500).json({ error: err.message }))
})

router.put("/:id", isAuth, (req, res) => {
  Article.findByPk(req.params.id, {
    include: [
      { model: File, as: 'heroImage', attributes: ["id", "path", "original_name", "mime_type"] },
      { model: Filiere, as: "filiere", attributes: ["id", "name", "slug"] },
      { model: Service, as: "service", attributes: ["id", "name", "slug"] },
      { model: User, as: "author", attributes: ["id", "name", "email"] },
      { model: File, as: 'contentFiles', attributes: ["id", "path", "original_name", "mime_type"], through: { attributes: [] } }
    ]
  })
    .then(article => {
      article.update(req.body)
        .then(article => res.json(article))
        .catch(err => res.status(500).json({ error: err.message }))
    })
    .catch(err => res.status(500).json({ error: err.message }))
})

router.delete("/:id", isAuth, (req, res) => {
  Article.findByPk(req.params.id)
    .then(article => {
      article.destroy()
        .then(article => res.json(article))
        .catch(err => res.status(500).json({ error: err.message }))
    })
    .catch(err => res.status(500).json({ error: err.message }))
})

export default router