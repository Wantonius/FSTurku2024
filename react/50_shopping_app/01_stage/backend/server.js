const express = require("express");
const shoppingRoute = require("./routes/shoppingroute");
const mongoose  = require("mongoose");

const app = express();

app.use(express.json());

const mongo_url = process.env.MONGODB_URL;
const mongo_user = process.env.MONGODB_USER;
const mongo_password = process.env.MONGODB_PASSWORD;

const url = "mongodb+srv://"+mongo_user+":"+mongo_password+"@"+mongo_url+"/shoppingdatabase?retryWrites=true&w=majority&appName=testiklusteri"

mongoose.connect(url).then(
	() => console.log("Connected to Mongo Atlas"),
	(err) => console.log("Failed to connect to Mongo Atlas. Reason:",err)
)

mongoose.set("toJSON",{virtuals:true});

app.use("/api",shoppingRoute);

app.listen(3000);

console.log("Running in port 3000");