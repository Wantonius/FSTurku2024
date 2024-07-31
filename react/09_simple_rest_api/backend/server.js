import express from 'express';

const app = express();

app.use(express.json());

app.use(function(req,res,next) {
	//console.log("Hi! I am filter");
	return next();
})

//DATABASE
let database = [];
let id = 100;

app.get("/api/contact",function(req,res) {
	return res.status(200).json(database);
})

app.post("/api/contact",function(req,res) {
	let contact = {
		"firstname":req.body.firstname,
		"lastname":req.body.lastname,
		"email":req.body.email,
		"phone":req.body.phone,
		"id":id
	}
	id++;
	database.push(contact);
	return res.status(201).json(contact);
	
})

app.delete("/api/contact/:id",function(req,res) {
	let tempId = parseInt(req.params.id);
	let tempDatabase = database.filter(contact => contact.id !== tempId);
	database = tempDatabase;
	return res.status(200).json({"Message":"Success"});
})

app.listen(3000);
console.log("Running in port 3000");