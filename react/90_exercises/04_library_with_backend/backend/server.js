const express = require("express");

const app = express();

app.use(express.json());

//DATABASE

const database = [];
let id = 100;

/*
	Book object
	{
		id:number,
		name:string,
		author:string,
		year:number,
		loaned:boolean
	}

*/

app.get("/api/books",function(req,res) {
	return res.status(200).json(database);
})

app.post("/api/books",function(req,res) {
	let book = {
		id:id,
		name:req.body.name,
		author:req.body.author,
		year:req.body.year,
		loaned:req.body.loaned
	}
	id++;
	database.push(book);
	return res.status(201).json(book);
})

app.put("/api/books/:id",function(req,res) {
	let tempId = parseInt(req.params.id);
	for(let i=0;i<database.length;i++) {
		if(tempId === database[i].id) {
			database[i].loaned = !database[i].loaned;
			return res.status(200).json({"Message":"Success"})
		}
	}
	return res.status(404).json({"Message":"Not found"})
})

console.log("Running in port 3000");

app.listen(3000);