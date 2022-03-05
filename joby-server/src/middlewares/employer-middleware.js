const employerMiddleware = (req, res, next) => {
  if (req.user.role !== 'EMPLOYER') {
    res.status(403).json({
      message: 'You must be Employer to acceess request',
    });
    return;
  }

  next();
};

module.exports = employerMiddleware;
