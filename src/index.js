const express = require('express');
const session = require('express-session');
const path = require('path');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const primaryuser = require("./config");

const app = express();

// --- 1. SESSION CONFIGURATION ---
app.use(session({
    secret: 'your_secret_key', 
    resave: false,
    saveUninitialized: false
}));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set('view engine', 'ejs');
app.use(express.static("public"));

app.post("/login", async (req, res) => {
    try {
        const check = await primaryuser.findOne({ email: req.body.email });
        
        if (!check) {
            // Render the page again with an error message
            return res.render("login", { error: "User not found!" }); 
        }

        const isPasswordMatch = await bcrypt.compare(req.body.password, check.password);
        
        if (isPasswordMatch) {
            res.render("home", { user: check }); 
        } else {
            // Render the page again with an error message
            res.render("login", { error: "Wrong password!" });
        }
    } catch (error) {
        console.error("Login Error:", error);
        res.render("login", { error: "An error occurred. Try again." });
    }
});

// You MUST also update the GET route to pass an empty error by default
app.get("/login", (req, res) => {
    res.render("login", { error: null });
});
app.get("/", (req, res) => {
    res.render("login", { error: null });
});

app.get("/signup", (req, res) => {
    res.render("signup");
});

app.post("/signup", async (req, res) => {
    try {
        // Updated to include 'name' and 'role' if you add them to your form later
        const data = {
            name: req.body.name || "New User", 
            email: req.body.email,
            password: req.body.password,
            role: req.body.role || "Community Member"
        };

        const existinguser = await primaryuser.findOne({ email: data.email });

        if (existinguser) {
            res.send("User already exists.");
        } else {
            const saltRounds = 10;
            const hashedPassword = await bcrypt.hash(data.password, saltRounds);
            data.password = hashedPassword;

            await primaryuser.insertMany([data]);
            res.redirect("/login"); 
        }
    } catch (error) {
        console.error("Signup Error:", error);
        res.send("Error during signup");
    }
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});