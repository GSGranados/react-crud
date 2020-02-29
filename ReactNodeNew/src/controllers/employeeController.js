const controllers = {};

var Employee = require("../model/Employee");
var Role = require("../model/Role");
var sequelize = require("../model/database");

//Migrar las tablas por si aun no existen en la DB
sequelize.sync();

controllers.list = async (req, res) => {
  const data = await Employee.findAll({
    include: [Role]
  })
    .then(function(data) {
      return data;
    })
    .catch(error => {
      return error;
    });

  res.json(data);
};

controllers.test = (req, res) => {
  const data = {
    name: "Jhon Smith",
    age: 20,
    city: "London"
  };

  console.log("Send data from controller employee");
  res.json(data);
};

module.exports = controllers;
