const express = require('express')
const commentRouter = express.Router()
const Comments = require("../models/comment.js")


//get all comments
commentRouter.get("/", async (req, res, next) => {
    try {
        const comments = await Comments.find()
        return res.status(200).send(comments)
    } catch (err) {
        res.status(500)
        return next(err)
    }
})

//post one comment
commentRouter.post("/", (req, res, next) => {
    console.log(req.body)
    const newComments = new Comments(req.body)
    newComments.save((err, savedComment) => {
        if(err) {
            res.status(500)
            return next(err)
        }
    return res.status(201).send(savedComment)
    })
})

//delete one 
commentRouter.delete("/:commentId", async (req, res, next) => {
    try {
        const deletedComment = await Comments.findOneAndDelete({_id:req.params.commentId})
        if(!deletedComment){
            res.status(404)
        }
        res.status(200).send(`${deletedComment.name}'s ${deletedComment.comment} comment was deleted.`)
    } catch (err) {
        res.status(500);
        return next(err);
    }
})


module.exports = commentRouter




// {
//     "name": "Skim Beeble",
//     "comment": "it work goooooooood",
//     "rating": 5
// }