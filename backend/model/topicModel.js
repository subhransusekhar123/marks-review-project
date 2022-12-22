const mongoose = require('mongoose');
const topicSchema  = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    desc:{
        type:Array,
        required:true
    },
    percentage:{
        type:Number,
        required:true
    },
    user_id:{
        type:String,
        required:true
    }
})

const topicModel = mongoose.model("topicOrder",topicSchema);
module.exports = topicModel;