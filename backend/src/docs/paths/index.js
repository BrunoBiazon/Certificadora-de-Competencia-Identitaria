const alunoPaths = require("./features/alunoPaths");
const professorPaths = require("./features/professorPaths");
const tutorPaths = require("./features/tutorPaths");
const temaPaths = require("./features/temaPaths");
const oficinaPaths = require("./features/oficinaPaths");
const turmaPaths = require("./features/turmaPaths");

module.exports = {
  ...alunoPaths,
  ...professorPaths,
  ...tutorPaths,
  ...temaPaths,
  ...oficinaPaths,
  ...turmaPaths
};
