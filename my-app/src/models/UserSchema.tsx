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
    },
}, {timestamps: true})

UserSchema.post('validate', function(users){
    const bcrypt = require("bcryptjs");
    const salt = bcrypt.genSaltSync(10);
    users.password =  bcrypt.hashSync(users.password, salt)
})

export const Users = models?.Users || model('Users', UserSchema);