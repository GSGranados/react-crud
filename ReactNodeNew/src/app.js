const express = require('express');
const app = express();
const employeeRouters = require('./routes/EmployeeRoute')

//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(express.json());

app.use('/employee',employeeRouters)

app.use('/test', (req, res) => {
  res.send("Test route");
});

app.use('/',(req,res)=>{
  res.send("Hello World form NodeJS express.");
});


app.listen(app.get('port'),()=>{
  console.log("Start server on port "+app.get('port'))
})