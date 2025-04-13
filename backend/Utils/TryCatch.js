const TryCatch = (handler) => {
  return async (req, res, next) => {
    try {
      await handler(req, res, next);
    } catch (error) {
      res.status(400).json({
        message: error,
      });
    }
  };
};

export default TryCatch;
