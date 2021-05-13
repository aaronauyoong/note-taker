const fs = require("fs");
const express = require("express");
const router = express.Router();
const notesDB = require("../db/db.json");
// NPM package that allows adding of unique IDs
const { v4: uuidv4 } = require("uuid");

module.exports = (router) => {
	// * `GET /api/notes/` should read the `db.json` file and return all saved notes as JSON.
	router.get("/", (req, res) => {
		fs.readFile("../db/db.json", "utf8", (err, notesDB) => {
			if (err) throw err;
			let notes = JSON.parse(notesDB);
			res.json(notes);
		});
	});

	// * `POST /api/notes` should receive a new note to save on the request body,
	// add it to the `db.json` file, and then return the new note to the client.
	router.post("/", (req, res) => {

		fs.readFile(__dirname + "../db/db.json", 'utf8', (error, notesDB) => {
			if (error) throw err;
			let notes = JSON.parse(notesDB);
			let notesID = uuidv4();

			const newNotesData = {
				title: req.body.title,
				text: req.body.text,
				id: notesID,
			};

			console.log(" ----- This is testing the notesData ----- ", newNotesData);

			let activeNote = notes.concat(newNotesData);

			fs.writeFile(__dirname + "../db/db.json", JSON.stringify(activeNote), (error, activeNote) => {
				if (error) {return error};
				console.log("This is a console log for activeNote data ---> ", activeNote);
				res.json(activeNote);
			});
		});
	});

	// * `DELETE /api/notes/:id` should receive a query parameter containing the id of a note to delete.
	// In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property,
	// and then rewrite the notes to the `db.json` file.
	router.delete("/:id", (req, res) => {

		console.log(" ----- This is a delete test for some notes ----- ", notesDB);

		let notesID = JSON.parse(req.params.id);

		console.log("This is a console log for the notesID ---> ", notesID);

		fs.readFile(__dirname + "/db/db.json", 'utf8', function (error, notes) {
			if (error) {
			  return console.log(error)
			}

			// After read, locate file via notesID

			// upon locating notesID, delete.
		})
		

	});

	// If have time, put an edit notes function (router.put)?
};
