import jwt from 'jsonwebtoken';
import db from '../models/index.mjs';

export default class UserController {
  static User = db.User;
  static login = async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await this.User.findOne({ where: { email } });
      if (!user || !(await user.validatePassword(password))) return res.status(401).json({ error: 'Invalid email or password' });
      return res.json({ token: jwt.sign({ id: user.id, role: user.role, is_active: user.is_active }, process.env.JWT_SECRET, { expiresIn: '11h' }) });
    } catch (error) { return res.status(500).json({ error: error.message }); }
  };
  static me = async (req, res) => {
    try { const user = await this.User.findByPk(req.user?.id, { attributes: { exclude: ['password'] } }); return res.json(user); }
    catch (error) { return res.status(500).json({ error: error.message }); }
  };
  static profile = async (req, res) => {
    try {
      const user = await this.User.findByPk(req.user?.id);
      if (!user) return res.status(404).json({ error: 'User not found' });
      const { name, email, password } = req.body;
      await user.update(Object.fromEntries(Object.entries({ name, email, password }).filter(([, value]) => value)));
      const data = user.toJSON(); delete data.password; return res.json(data);
    } catch (error) { return res.status(500).json({ error: `Update failed: ${error.message}` }); }
  };
  static list = async (_req, res) => {
    try { return res.json(await this.User.findAll({ attributes: { exclude: ['password'] }, order: [['createdAt', 'DESC']] })); }
    catch (error) { return res.status(500).json({ error: error.message }); }
  };
  static create = async (req, res) => {
    try {
      const { name, email, password, role = 'editor' } = req.body;
      if (await this.User.findOne({ where: { email } })) return res.status(400).json({ error: 'Email already taken' });
      const user = await this.User.create({ name, email, password, role }); const data = user.toJSON(); delete data.password;
      return res.status(201).json(data);
    } catch (error) { return res.status(500).json({ error: error.message }); }
  };
  static get = async (req, res) => {
    try { const user = await this.User.findByPk(req.params.id, { attributes: { exclude: ['password'] } }); if (!user) return res.status(404).json({ error: 'User not found' }); return res.json(user); }
    catch (error) { return res.status(500).json({ error: error.message }); }
  };
  static update = async (req, res) => {
    try { const user = await this.User.findByPk(req.params.id); if (!user) return res.status(404).json({ error: 'User not found' }); await user.update(req.body); const data = user.toJSON(); delete data.password; return res.json(data); }
    catch (error) { return res.status(500).json({ error: error.message }); }
  };
  static remove = async (req, res) => {
    try { const user = await this.User.findByPk(req.params.id); if (!user) return res.status(404).json({ error: 'User not found' }); await user.destroy(); return res.json({ message: 'User deleted successfully' }); }
    catch (error) { return res.status(500).json({ error: error.message }); }
  };
}
