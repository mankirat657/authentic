// server.js
const express = require('express');
const app = express();
const connectDb = require('./connection/connect'); 
const User = require("./model/user"); 
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const cookieParser = require('cookie-parser');

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true 
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.post('/createUser', async (req, res) => {
    const { name, email, password } = req.body;

    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ error: "User Already Registered" });

    bcrypt.genSalt(10, (err, salt) => {
        if (err) return res.status(500).json({ error: "Error generating salt" });

        bcrypt.hash(password, salt, async (err, hash) => {
            if (err) return res.status(500).json({ error: "Error hashing password" });

            try {
                let newUser = await User.create({
                    name,
                    email,
                    password: hash,
                });

                let token = jwt.sign({ email, userid: newUser._id, name  : newUser.name},"sjjjjjjjjjjjj"); 
                res.cookie("token", token, { httpOnly: true, secure: false });

                return res.status(201).json({ message: "User created successfully!" });
            } catch (error) {
                console.error("Error creating user:", error);
                return res.status(500).json({ error: "Error creating user" });
            }
        });
    });
});

app.post('/loginuser', async (req, res) => {
    let { email, password } = req.body;
    let user = await User.findOne({ email });
    if (!user) return res.status(400).json({ error: "User not found" });

    bcrypt.compare(password, user.password, (err, result) => {
        if (err) return res.status(500).json({ error: "Error comparing password" });

        if (result) {
            let token = jwt.sign({ email, userid: user._id }, process.env.JWT_SECRET || "sjjjjjjjjjjjj");
            res.cookie("token", token, { httpOnly: true, secure: false });
            return res.status(200).json({ 
                message: "Login successful", 
                token, 
                user: { name: user.name, email: user.email }  
            });
        } else {
            return res.status(401).json({ error: "Invalid credentials" });
        }
    });
});
app.get('/logout' , async(req,res)=>{
    res.cookie("token", "");
    
}) 

app.listen(3000, () => {
    console.log("Server started successfully on port 3000");
    connectDb();
});
