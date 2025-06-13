function adminOnly(req, res, next) {
  // Если пользователь авторизован и его роль — админ
  if (!req.user || req.user.role !== 'admin') {
    return res.status(403).json({ error: 'Доступ запрещён' })
  }
  next()
}
export default adminOnly
