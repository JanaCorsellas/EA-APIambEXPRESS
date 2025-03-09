import mongoose, {Schema, Document} from "mongoose";

//definir tipus de variables
const subjectSchema = new mongoose.Schema({
    name :{
        type: String,
        required : true
    },
    teacher: {
        type: String,
        required : true
    },
    alumni: [{
        type : Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }]
});

//definir interfície amb les variables definides, indicant quina estructura ha de seguir l'usuari per crear el json
export interface ISubject{
    name : string;
    teacher : string;
    alumni : mongoose.Types.ObjectId[]; 
}

const Subject = mongoose.model('Subject', subjectSchema);
export default Subject;
