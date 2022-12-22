const { default: axios } = require("axios")
const topicController = require("../model/topicModel");

const calculateData = (user,topic) => {
    axios.get(`http://localhost:4000/topic/getSpecificTopic/${topic}/${user}`)
    .then(async(ele)=>{
        console.log(ele.data[0].desc);
        x = ele.data[0].desc;
        let add = 0;
        for(let i = 0 ; i < x.length-1 ; i++){
            add = add + Number(x[i].underStanding)
        }

        let percentage = (add/(4*x.length) * 100);
        console.log(percentage,add);
        let topicUpdate = await topicController.updateOne({name:topic,user_id:user},{$set:{percentage:percentage}})
        console.log(topicUpdate);
    })
    .catch((err)=>console.log(err))
}

module.exports = calculateData;