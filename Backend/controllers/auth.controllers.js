import bcrypt from "bcrypt"

import generateToken from "../config/token.js";
import User from "../models/user.model.js";

export async function register(req, res){
    const {name, email, password} = req.body;

    try {
        await isValidUser(res, name, email, password);

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = await User.create({name, email, password: hashedPassword, createdAt: new Date()})

        const token = generateToken(newUser._id);

        res.cookie('token', token , {
            httpOnly:true,
            sameSite:true,
            maxAge: 15*24*60*60*1000
        });

        res.sendStatus(201);

    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
}

export async function login(req, res){
    const {email, password} = req.body;

    try {
        if (!email || !password) {
            return res.status(400).json({ message: "All fields Required" });
        }

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return res.status(400).json({ message: "Password Incorret" });
        }

        const token = generateToken(user._id);

        res.cookie('token', token , {
            httpOnly:true,
            sameSite:true,
            maxAge: 15*24*60*60*1000
        });

        res.status(200).send({"token": token});

    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
}


async function isValidUser(res, name, email, password){
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUserEmail = await User.findOne({ email });

    if (existingUserEmail) {
      return res.status(400).json({ message: "Email already in use" });
    }

    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password must be at least 6 characters" });
    }
}