const express = require("express");
const topicRouter = express.Router();
const { getTopicData, postTopicData, updateTopicData,getTopicDataUser, lastTopic,updateData } = require("../controller/topicController");

topicRouter.get("/getTopic",getTopicData);
topicRouter.get("/getSpecificTopic",lastTopic);
topicRouter.get("/getSpecificTopic/:title/:user",lastTopic);
//trial
topicRouter.put("/updateTrial/:num",updateData);

topicRouter.post("/postTopic",postTopicData);
topicRouter.put("/updateTopic/:id",updateTopicData);
topicRouter.get("/getTopic/:user",getTopicDataUser);

module.exports = topicRouter;