import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        // if we can use multiple parameter[98]
        name:{
            type:String,
            required:[true,'Name is required'],
            maxLength:[50,"name should be less than 50 character"]
        },
        email:{
            type:String,
            unique:true
        },
        password: String,
        age:Number
    }
    );

// export 
// stracture of schemas
export default mongoose.model("User",userSchema)
// mongoose.model("database schema name",Model)