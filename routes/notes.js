const fs = require("fs");
const express = require("express");
const router = express.Router();
// NPM package that allows adding of unique IDs
const { v4: uuidv4 } = require("uuid");

router.get("/", (req, res) => {
	fs.readFile("./db/db.json", "utf8", (err, notesDB) => {
		if (err) throw err;
		res.json(JSON.parse(notesDB));
	});
});

router.post("/", (req, res) => {
	fs.readFile("./db/db.json", "utf8", (err, notesDB) => {
		if (err) throw err;
		let notes = JSON.parse(notesDB);
		let notesID = uuidv4();

		const newNotesData = {
			title: req.body.title,
			text: req.body.text,
			id: notesID,
		};

		let activeNote = notes.concat(newNotesData);

		fs.writeFile("./db/db.json",JSON.stringify(activeNote), (err, activeNote) => {
				if (err) throw err;
				console.log(
					"This is a console log for activeNote data ---> ",
					activeNote
				);
				res.json(activeNote);
			}
		);
	});
});

router.delete("/:id", (req, res) => {
	const notesID = req.params.id;

	console.log("This is a console log for DELETE notesID ---> ", notesID);

	fs.readFile("./db/db.json", "utf8", (err, notes) => {
		if (err) throw err;

		notes = JSON.parse(notes);

		notes = notes.filter(val => val.id !== notesID);

		fs.writeFile("./db/db.json", JSON.stringify(notes), (err) => {
				if (err) throw err;
				res.json(notes);
			}
		);
	});
});

router.put("/:id", (req, res) => {
	console.log(" ----- This is a PUT (edit) test for notes ----- ");

	const notesID = req.params.id;
	console.log("This is a console log for PUT noteID ---> ", notesID);

	fs.readFile("./db/db.json", "utf8", (err, notes) => {
		if (err) throw err;

		notes.JSONparse(notes);

		notes = notes.filter(val => val.id !== noteId);

		fs.writeFile("./db/db.json", JSON.stringify(notes), (err) => {
			if (err) throw err;
			res.json(notes);
			}
		);
	});
});

module.exports = router;