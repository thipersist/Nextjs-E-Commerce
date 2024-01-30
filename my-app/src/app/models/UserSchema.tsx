import { Schema, model, models } from "mongoose";

const UserSchema =  new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        require: false,
        unique: true
    },
    password: {
        type: String,
        required: true,
        validate: (pass: string) => {
            if(!pass?.length || pass.length < 5){
                new Error ('Password must be at least 5 characters');
                return false;
            }
        }
    },
    passwordConfirm: {
        type: String,
        required: true,
        validate: (passConfirm: string) => {
            if(!passConfirm?.length || passConfirm.length < 5 ){
                new Error ('Password must be at least 5 characters')
            }
        }
    }
}, {timestamps: true})

export const Users = models?.Users || model('Users', UserSchema);