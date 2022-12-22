const { default: axios } = require("axios");
const { isObjectIdOrHexString } = require("mongoose");
const topicController = require("../model/topicModel");
const calculateData = require("../utils/utils");

const getTopicData =async (req,res) => {
    const topic = await topicController.find()
    res.send(topic)
}

const getTopicDataUser = async(req,res) => {
    const topic = await topicController.find({user_id:req.params.user})
    res.send(topic)
}

const postTopicData = async (req,res) => {
    console.log(req.body,"hello");
    let x = Math.random() * 14;
    let b = req.body.desc.split(/[.:;?!~,`"&|()<>{}\[\]\r\n/\\]+/);
    let overall = [];
    for(let i = 0 ; i < b.length ; i++){
        let c = {};
        c.sentence = b[i];
        c.underStanding = 0
        overall.push(c);
    }

    console.log(overall);
    let topic = topicController({
        name:req.body.name,
        desc:overall,
        percentage:0,
        user_id:req.body.id
    })
    let saveTopic =await topic.save();
    res.send(saveTopic)
}

const updateTopicData =async (req,res) => {
    let updateTopic =await topicController.updateOne({ _id:req.params.id },req.body)
    res.send( updateTopic )
}

const lastTopic = async(req,res) => {
    console.log(req.params)
    // let userData = await topicController.find({
    //     "$and":[
    //         {
    //             name:req.body.title
    //         },
    //         {
    //             user_id:req.body.user
    //         }
    //     ]
    // })

    let userData1 = await topicController.find({
        "$and":[
            {
                name:req.params.title
            },
            {
                user_id:req.params.user
            }
        ]
    })
    res.send(userData1)
}

const updateData = async (req, res) => {
    let x =await topicController.updateOne(
        {
           "desc.sentence":req.body.sent
        },
        {
            $set:{
                "desc.$.underStanding":req.params.num
            }
        }
    )
      
    calculateData(req.body.user,req.body.topic)
    res.send(x);
}

module.exports = { getTopicData, postTopicData, updateTopicData,getTopicDataUser,lastTopic,updateData };