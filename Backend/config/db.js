import mongoose from "mongoose";

async function connectDataBase(){
    try {
        await mongoose.connect(process.env.dbUrl);
        console.log("Database Connected");        
    } catch (error) {
        console.log("Database Connection Error");       
    }
}

export default connectDataBase;