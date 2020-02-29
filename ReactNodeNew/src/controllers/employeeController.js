const controllers = {};

var Employee = require("../model/Employee");
var Role = require("../model/Role");
var sequelize = require("../model/database");

//Migrar las tablas por si aun no existen en la DB
sequelize.sync();

//Create method for EmployeeController

controllers.create = async (req, res) => {
  const { name, email, address, phone, role } = req.body;
  //creation method
  const data = await Employee.create({
    name : name,
    email: email,
    address: address,
    phone: phone,
    role: role
  })
    .then(function(data) {
      return data;
    })
    .catch(error => {
      return error;
    });

  res.status(200).json({

    success: true,
    message: "Guardado Exitosamente",
    data: data
  });
};

//View de un employee
controllers.get = async (req, res) => {
  const { id } = req.params;

  const data = await Employee.findAll({
    where: { id: id },
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

//Listado de los employees
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

//UPDATE  employee

controllers.update = async (req,res) => {
  // parameter get id
  const { id } = req.params;
  // parameter POST
  const {name, email, address, phone, role } = req.body;
  // Update data
  const data = await Employee.update({
    name:name,
    email:email,
    address:address,
    phone:phone,
    roleId:role
  },
  {
    where: { id: id}
  })
  .then( function(data){
    return data;
  })
  .catch(error => {
    return error;
  }) 
  res.json({success:true, data:data, message:"Updated successful"});
}

//Delete Employee
controllers.delete = async (req, res) => {
  // parameter post
  const { id } = req.body;
  // delete sequelize
  const del = await Employee.destroy({
    where: { id: id}
  })
  res.json({success:true,deleted:del,message:"Deleted successful"});
}

module.exports = controllers;
