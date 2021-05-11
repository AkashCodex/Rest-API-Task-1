var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


// Task-1
// array ->JSON


let persons = [];



router.post('/userdetails',(req,res)=>{
  console.log("userdetailHit");
  let name = req.body.name;
  let email = req.body.email;
  let dateOfBirth = req.body.dob;
  let password = req.body.password;
  let organization = req.body.org;
  let userDetails = [name,email,dateOfBirth,password,organization];
  persons.push(userDetails);
  res.send(persons);
});


// Task-2

router.post('/username',(req,res)=>{    
 console.log("username Hit");
 let name = req.body.name;
 let gender = req.body.gender;
 
 if(gender=="male"){
  res.send("welcome Mr " + name + " How are you? " ); 
 }
 else{
  res.send(" welcome Mrs. " + name + " How are you? ");
 }
});


// you need to define in your object that this is id and this is name.

router.get('/getPerson/:id',(req,res)=>{
  console.log("getperson Hit");
  let getId = req.params.id;
  res.send(persons[getId]);
  //res.send(persons.getid.name); //name is undefined
});



// Task-4

router.put('/personupdate/:id',function(req,res){
  console.log("personUpdateHit");
  const Id = req.params.id;
  let name = req.body.name

  let index = persons.findIndex((person)=>{
      return(person.id == Number.parseInt(id))
  })
  if(index >= 0){
      console.log(req.body);
  }else{
      res.status(404);
      res.end();
  }
  
});



// Task-5


router.delete('/deleteperson/"id',function(req,res){
  let id = req.params.id;
  let index = persons.findIndex((person)=>{
      return (person.id == Number.parseInt(id))
  })
  if(index >0){
      let std = persons[index]
      persons.splice(index, 1);
      res.send("deleted");
  }else{
      res.status(404);
  }
});


module.exports = router;
