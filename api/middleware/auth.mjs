import jwt, { decode } from "jsonwebtoken"
import "../config/env.mjs"

const auth = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1]
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({
        message: "Authentication failed",
      })
    }
    if (!decoded.is_active) {
      return res.status(401).json({
        message: "Your account has been disabled. Contact administrator",
      })
    }
    req.user = decoded
    next()
  })
}

const isAdmin = (req, res, next) => {
  if (req.user && req.user.role === 'admin') {
    next()
  } else {
    res.status(403).json({ message: "Forbidden: Admin access required" })
  }
}

export { auth as default, isAdmin }