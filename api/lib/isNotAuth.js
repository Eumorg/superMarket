module.exports = function isNotAuth(req, res, next) {
  if (!req.session?.user) return next();
  return 
};
