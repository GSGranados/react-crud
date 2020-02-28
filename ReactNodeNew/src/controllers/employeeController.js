const controllers = {};

var Employee = require("../model/Employee");
var Role = require("../model/Role");
var sequelize = require("../model/database");

controllers.testdata = async (req, res) => {
  const response = await sequelize
    .sync()
    .then(function() {
      //Create role
     /* Role.create({
        role: "Admin"
      });*/

      // create employee
      Employee.create({
        name: "John Smith",
        email: "smith@mail.com",
        address: "California FL 15",
        phone: "76890091",
        roleId: 1
      });

      const data = Employee.findAll();
      return data;
    })
    .catch(err => {
      return err;
    });
  res.json(response);
};

controllers.list = async (req, res) => {
  const data = await Employee.findAll();
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
