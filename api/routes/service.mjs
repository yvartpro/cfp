import express from "express"
const router = express.Router()
import db from "../models/index.mjs"
import isAuth, { isAdmin } from "../middleware/auth.mjs"

const Service = db.Service
const File = db.File
const Article = db.Article

router.get("/", (req, res) => {
  const { page = 1, limit = 15, search = "" } = req.query
  const offset = (page - 1) * limit
  const { Op } = db.Sequelize

  const where = search ? {
    [Op.or]: [
      { name: { [Op.like]: `%${search}%` } },
      { slug: { [Op.like]: `%${search}%` } }
    ]
  } : {}

  Service.findAndCountAll({
    where,
    limit: parseInt(limit),
    offset: parseInt(offset),
    order: [['createdAt', 'DESC']],
    include: [
      { model: File, as: 'heroImage', attributes: ["id", "path", "original_name"] },
      { model: Article, as: 'articles', attributes: [] }
    ],
    attributes: {
      include: [
        [db.sequelize.fn('COUNT', db.sequelize.col('articles.id')), 'articleCount']
      ]
    },
    subQuery: false,
    group: ['Service.id']
  })
    .then(result => {
      const count = result.count.length || result.count
      res.json({
        data: result.rows,
        total: count,
        page: parseInt(page),
        totalPages: Math.ceil(count / limit)
      })
    })
    .catch(err => res.status(500).json({ error: err.message }))
})

router.get("/:id", (req, res) => {
  Service.findByPk(req.params.id, {
    include: [
      { model: File, as: 'heroImage', attributes: ["id", "path", "original_name"] },
      { model: Article, as: 'articles', attributes: ["id", "title", "slug", "excerpt", "published_at"] }
    ]
  })
    .then(service => {
      if (!service) return res.status(404).json({ message: "Service not found" })
      res.json(service)
    })
    .catch(err => res.status(500).json({ error: err.message }))
})

router.get("/slug/:slug", (req, res) => {
  Service.findOne({
    where: { slug: req.params.slug },
    include: [
      { model: File, as: 'heroImage', attributes: ["id", "path", "original_name"] },
      { model: Article, as: 'articles', attributes: ["id", "title", "slug", "excerpt", "published_at"] }
    ]
  })
    .then(service => {
      if (!service) return res.status(404).json({ message: "Service not found" })
      res.json(service)
    })
    .catch(err => res.status(500).json({ error: err.message }))
})

router.post("/", isAuth, isAdmin, (req, res) => {
  Service.create(req.body)
    .then(service => res.json(service))
    .catch(err => res.status(500).json({ error: err.message }))
})

router.patch("/:id", isAuth, isAdmin, (req, res) => {
  Service.findByPk(req.params.id)
    .then(service => {
      if (!service) return res.status(404).json({ message: "Service not found" })
      service.update(req.body)
        .then(service => res.json(service))
        .catch(err => res.status(500).json({ error: err.message }))
    })
    .catch(err => res.status(500).json({ error: err.message }))
})

router.delete("/:id", isAuth, isAdmin, (req, res) => {
  Service.findByPk(req.params.id)
    .then(service => {
      if (!service) return res.status(404).json({ message: "Service not found" })
      service.destroy()
        .then(() => res.json({ message: "Service deleted successfully" }))
        .catch(err => res.status(500).json({ error: err.message }))
    })
    .catch(err => res.status(500).json({ error: err.message }))
})

export default router
