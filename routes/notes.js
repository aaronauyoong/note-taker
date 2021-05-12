const fs = require("fs");
const express = require("express");
const router = express.Router();
const notesDB = require("../db/db.json");
// NPM package that allows adding of unique IDs
const { v4: uuidv4 } = require("uuid");

module.exports = (router) => {
	// * `GET /api/notes/` should read the `db.json` file and return all saved notes as JSON.
	router.get("/", (req, res) => {
		res.json(notesDB);
	});

	// * `POST /api/notes` should receive a new note to save on the request body,
	// add it to the `db.json` file, and then return the new note to the client.
	router.post("/", (req, res) => {
		const notesID = uuidv4();
		const notesData = {
			title: req.body.title,
			text: req.body.text,
			id: notesID,
		};

		console.log(" ----- This is testing the notesData ----- ", notesData);

		notesDB.push(notesData);

		fs.writeFile("../db/db.json", JSON.stringify(notesDB), (err) => {
			if (err) throw (err);
			console.log(" ----- Successfully saved the new note! ----- ");
		});

		res.json(notesDB);
	});

	// * `DELETE /api/notes/:id` should receive a query parameter containing the id of a note to delete. 
	// In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, 
	// and then rewrite the notes to the `db.json` file.
	router.delete("/:id", (req, res) => {

		console.log(" ----- This is a delete test for some notes ----- ", notesDB);

	});
};
