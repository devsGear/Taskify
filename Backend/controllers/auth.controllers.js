import User from "../models/user.model.js";

export async function register(req, res){
    const {name, email, password} = req.body;

    try {
        return await isValidUser(name, email, password);

        
    } catch (error) {
        
    }


    res.sendStatus(201);
}


async function isValidUser(name, email, password){
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUserEmail = await User.findOne({ email });

    if (existingUserEmail) {
      return res.status(400).json({ message: "Email already in use" });
    }

    if (password.length <= 6) {
      return res
        .status(400)
        .json({ message: "Password must be at least 6 characters" });
    }
}