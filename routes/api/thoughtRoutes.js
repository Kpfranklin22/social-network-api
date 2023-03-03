const router = require("express").Router();
const {
  getThoughts,
  getSingletThought,
  createThought,
  updateThought,
  deleteThought,
} = require("../../controllers/thoughtController");

// /api/thoughts
router.use("/").get(getThoughts).post(createThought);

// /api/thoughts/:thoughtId
router
  .route("./thoughtId")
  .get(getSingletThought)
  .put(updateThought)
  .delete(deleteThought);

module.exports = router;
