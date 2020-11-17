/* (C) 2020 Martijn van Zuilen
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * this program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.*/


const express = require("express");
const mongoose = require("mongoose");

const app = express(); //Initialize express REST API
app.use(express.json()); //Use JSON extension included with express framework

require("dotenv").config(); //Load environment variables neccessary for the connection. Environment variables are confidential and therefore not included with the source code to mitigate security issues



mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true}); //Connect to MongoDB database
const db = mongoose.connection; //Initialize the connection to the MongoDB database

/*Database initialization functions: */
db.on('error', console.error.bind(console, 'MongoDB connection error:')); //Error handle following exceptions
db.once('open', function() { //Open code insert welcome function, possible analytics may be applied here
	
	console.log("Connection to MongoDB databse established!");

});

app.listen(process.env.PORT, () => { //Make server listen on port defined in .env
	console.log(`Server running on port ${process.env.PORT}...`);

});


