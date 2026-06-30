const jwt = require("jsonwebtoken");
const Tutor = require("../models/Tutor");

module.exports = async (req, res, next) => {
  let token;
  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    token = req.headers.authorization.split(" ")[1];
  }
  if (!token) {
    return res.status(401).json({ success: false, error: "Acesso negado" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "secreto");
    const user = await Tutor.findById(decoded.id);
    if (!user) {
      return res.status(401).json({ success: false, error: "Usuário não encontrado" });
    }
    req.user = user;
    next();
  } catch (err) {
    return res.status(401).json({ success: false, error: "Token inválido" });
  }
};
