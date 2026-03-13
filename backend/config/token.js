import jwt from "jsonwebtoken";

function generateToken(id){
    try {
        const token = jwt.sign({ id }, process.env.JWT_SECRET, {
            expiresIn: "15d",
        });

        return token;
    } catch (error) {
        console.log(error);
    }
}

export default generateToken