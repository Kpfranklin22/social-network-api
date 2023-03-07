const router = require("express").Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require("../../controllers/thoughtController");

// /api/thoughts
router.route("/").get(getThoughts).post(createThought);

// /api/users/:userId/thoughts
router.route("/:userId/thoughts").post(addReaction);

// /api/users/:userId/thoughts/:thoughtId
router.route("/:userId/thoughts/:thoughtsId").delete(removeReaction);

// /api/thoughts/:thoughtId
router
  .route("./thoughtId")
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

module.exports = router;
