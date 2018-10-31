// REQUIRED ---------------------------------------------------------------
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const express = require("express");
const moment = require("moment");

const FIREBASE_PATHS = {
    tasks: "/tasks"
};

// CONFIG -----------------------------------------------------------------
admin.initializeApp(functions.config().firebase);
const cors = require("cors")({
    origin: true
});

const tasksAPI = express();
tasksAPI.use(cors);

// MIDDLEWARE --------------------------------------------------------
function checkMiddleware(req, res, next) {
    next();
}

// ROUTES --------------------------------------------------------
tasksAPI.get("/", [checkMiddleware], function(req, res) {
    res.send("tasks");
});

tasksAPI.post("/create", [checkMiddleware], (req, res) => {
    const task = req.body.task;

    task["id"] = Date.now().toString();

    admin
        .database()
        .ref(FIREBASE_PATHS.tasks)
        .child(task["id"])
        .update(task)
        .then(() => {
            res.json({
                name: task["name"],
                dueDate: task["dueDate"],
                priority: task["priority"],
                id: task["id"]
            });
        });
});

tasksAPI.get("/destroi/:id", [checkMiddleware], function(req, res) {
    res.send("destroy reached");
});

tasksAPI.post("/update", [checkMiddleware], (req, res) => {
    res.json({ update: "update" });
});

exports.tasks = functions.https.onRequest(tasksAPI);
