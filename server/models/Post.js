const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            unique: true
        },
        discription: {
            type: String,
            required: true,
        },
        userName: {
            type: String,
            required: true,
        },
        pic: {
            type: String,
            default: ""
        },
        categories:{
            type: Array,
            required:false
        }
    },
    {timestamps:true}
);

module.exports =mongoose.model('Post',PostSchema);