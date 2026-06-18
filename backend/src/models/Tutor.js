const mongoose = require("mongoose");

const TutorSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: [true, "Nome é obrigatório"],
    trim: true
  },
  email: {
    type: String,
    required: [true, "Email é obrigatório"],
    unique: true,
    trim: true,
    lowercase: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Email inválido"]
  },
  curso: {
    type: String,
    required: [true, "Curso é obrigatório"],
    trim: true
  },
  periodo: {
    type: String,
    required: [true, "Período é obrigatório"],
    trim: true
  }
}, {
  timestamps: true,
  collection: "tutores"
});

module.exports = mongoose.model("Tutor", TutorSchema);
