import jwt from "jsonwebtoken";

function authMiddleware(req, res, next) {
  const token = req.headers.token;

  if (!token) {
    return res.status(401).json({
      msg: "Token is required",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.userId = decoded.id;
    next();
  } catch (err) {
    return res.status(401).json({
      msg: "Invalid or expired token",
    });
  }
}

export default authMiddleware;