import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        firstName:{
            type:String,
            required:true,
            min:2,
            max:50,
        },
        lastName:{
            type:String,
            required:true,
            min:2,
            max:50,
        },
        email:{
            type:String,
            required:true,
            unique:true,
            max:50,
        },
        password:{
            type:String,
            required:true,
            min:5,
            max:50,
        },
        picturePath:{
            type:Array,
            default:[]
        },
        friends:{
            type:Array,
            default:[]
        },
        location:String,
        
    },
    {timestamps : true}
)


const User=mongoose.model("User",userSchema);
export default User;