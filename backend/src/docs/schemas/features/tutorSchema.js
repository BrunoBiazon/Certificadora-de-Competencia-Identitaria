module.exports = {
  Tutor: {
    type: "object",
    properties: {
      _id: { type: "string" },
      nome: { type: "string" },
      email: { type: "string" },
      curso: { type: "string" },
      periodo: { type: "string" }
    }
  },
  TutorInput: {
    type: "object",
    required: ["nome", "email", "curso", "periodo"],
    properties: {
      nome: { type: "string" },
      email: { type: "string" },
      curso: { type: "string" },
      periodo: { type: "string" }
    }
  }
};
