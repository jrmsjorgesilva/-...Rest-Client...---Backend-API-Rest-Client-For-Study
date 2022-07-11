const router = require("express").Router();
// models
const Posts = require("../models/Posts");
// controllers
const createPost = require('../controllers/Post/createPost');
const getPost = require('../controllers/Post/getPost');
const getPostById = require('../controllers/Post/getPostById');
const patchPostById = require('../controllers/Post/patchPostById');
const deletePostById = require('../controllers/Post/deletePostById');

router.post("/", createPost);

router.get("/", getPost);

router.get("/:id", getPostById);

router.patch("/:id", patchPostById);

router.delete("/:id", deletePostById);

module.exports = router;
