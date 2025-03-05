import mongoose from "mongoose";

//definir tipus de variables
const userSchema = new mongoose.Schema({
    name :{
        type: String,
        required : true
    },
    age: {
        type: Number,
        required : true
    },
    email: {
        type : String,
        required : true
    },
    password: {
        type: String,
        required : true
    }
});

//definir interfície amb les variables definides, indicant quina estructura ha de seguir l'usuari per crear el json
export interface IUser{
    name : string;
    age : number;
    email : string;
    password: string;

}

const User = mongoose.model('User', userSchema);
export default User;
