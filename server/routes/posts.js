const router = require('express').Router();
const Post = require('../models/Post');
const verify=require('../components/verify');
//create post
router.post("/",verify, async (req, res) => {
    const newPost = new Post({
        title:req.body.title,
        userName:req.body.user,
        discription:req.body.disc
    });
    console.log(newPost);
    try {
        const savedPost = await newPost.save();
        res.status(200).send(`post saved ${savedPost}`);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get("/", async (req, res) => {
    try {
        const post = await Post.find();
        res.status(200).json(post);
    } catch (err) {
        res.status(500).json(err);
    }
});
//DELETE

module.exports = router;