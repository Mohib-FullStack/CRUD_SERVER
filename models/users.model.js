const { v4: uuidv4 } = require("uuid");

const users = [
  { id: uuidv4(), name: "Sonia", birth: "2019-14-05" },
  { id: uuidv4(), name: "Antoine", birth: "2000-12-05" },
  { id: uuidv4(), name: "Alice", birth: "1990-14-09" },
  { id: uuidv4(), name: "Sophie", birth: "2001-10-02" },
  { id: uuidv4(), name: "Bernard", birth: "1980-21-08" },
];
module.exports = users;
