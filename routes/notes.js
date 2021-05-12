const fs = require("fs");
const path = require("path");
const express = require("express");
const router = express.Router();
const notes = require('../db/db.json');

// NPM package that allows adding of unique IDs
const { v4: uuidv4 } = require('uuid');

// GET
// * `GET /api/notes/` should read the `db.json` file and return all saved notes as JSON.
// router.get("/", (req, res) => {
// 	res.json(notesData);
// });

module.exports = (app) => {

    router.get("/", function (req, res) {

    });
    
    
    // POST
    // * `POST /api/notes` should receive a new note to save on the request body,
    // add it to the `db.json` file, and then return the new note to the client.
    router.post("/", (req, res) => {


    });
    
    router.put("/:id", function(req, res) {

    });
    
    router.delete("/:id", function (req, res) {
    

    });
    
}
