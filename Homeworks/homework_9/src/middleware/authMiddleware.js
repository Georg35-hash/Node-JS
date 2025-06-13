import jwt from 'jsonwebtoken'

function checkMustChangePassword(req, res, next) {
 
  if (
    req.user &&
    req.user.mustChangePassword === true &&
    req.path !== '/change-password'
  ) {
    return res.redirect('/change-password')
  }
  next()
}

function checkAuth(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1]
  if (!token) return res.status(401).json({ error: 'Токен отсутствует' })

  try {
    const userData = jwt.verify(token, process.env.JWT_SECRET)
    req.user = userData 
    next()
  } catch (err) {
    return res.status(401).json({ error: 'Неверный токен' })
  }
}
export { checkAuth, checkMustChangePassword }
