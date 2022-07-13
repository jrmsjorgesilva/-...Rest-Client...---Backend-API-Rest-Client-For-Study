const router = require("express").Router();
// models
const Comments = require("../../models/Comments");
// contollers
const createComment = require('../../controllers/Comment/createComment')
const getComment = require('../../controllers/Comment/getComment');
const getCommentById = require('../../controllers/Comment/getCommentById');
const patchCommentById = require('../../controllers/Comment/patchCommentById');
const deleteCommentById = require('../../controllers/Comment/deleteCommentById');

router.post("/", createComment);

router.get("/", getComment);

router.get("/:id", getCommentById);

router.patch("/:id", patchCommentById);

router.delete("/:id", deleteCommentById);

module.exports = router;
