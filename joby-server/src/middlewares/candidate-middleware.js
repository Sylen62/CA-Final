const candidateMiddleware = (req, res, next) => {
  if (req.user.role !== 'CANDIDATE') {
    res.status(403).json({
      success: false,
      message: 'You must be Candidate to acceess request',
    });
    return;
  }

  next();
};

module.exports = candidateMiddleware;
