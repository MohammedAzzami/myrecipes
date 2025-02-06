import dotenv from "dotenv";
dotenv.config({ path: './src/.env' });
import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { UserModel } from "../models/Users.js";

const router = express.Router();
const secretKey = process.env.SECRET_KEY;

router.post("/register", async(req, res) => {
    const { username, password } = req.body;

    const lowerUsername = username.toLowerCase();

    const user = await UserModel.findOne({username: lowerUsername});

    if (user) {
        return res.json({message: "User already exist!"});
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new UserModel({username: lowerUsername, password: hashedPassword});
    await newUser.save();

    res.json({message: "User Registered Successfully"});
});

router.post("/login", async(req, res) => {
    const { username, password } = req.body;
    const lowerUsername = username.toLowerCase();
    const user = await UserModel.findOne({username: lowerUsername});
    if (!user) {
        return res.json({message: "User Doesn't Exist!"});
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
        return res.json({message: "Username or Password is Incorrect!"});
    }
    
    const token = jwt.sign({userId: user._id, username: user.username}, secretKey);
    res.json({token, userId: user._id, username: user.username});

});


export { router as userRouter }