const router = require('express').Router();
const Post = require('../models/Post');

//create post
router.post("/", async (req, res) => {
    const newPost =new Post(req.body);
    try {
        const savedPost = await newPost.save();
        res.status(200).send(`post saved ${savedPost}`);
    } catch (error) {
        res.status(500).send(error);
    }
});

//DELETE

module.exports = router;