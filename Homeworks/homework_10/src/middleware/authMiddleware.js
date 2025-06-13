import jwt from 'jsonwebtoken'

function checkAuth(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1]
  if (!token) return res.status(401).json({ error: 'Токен отсутствует' })

  try {
    const userData = jwt.verify(token, process.env.JWT_SECRET)
    req.user = userData // должен содержать id, role, mustChangePassword и т.п.
    next()
  } catch (err) {
    return res.status(401).json({ error: 'Неверный токен' })
  }
}
export { checkAuth, checkMustChangePassword }
