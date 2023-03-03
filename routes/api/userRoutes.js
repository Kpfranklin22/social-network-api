const router = require("express").Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  addThought,
  removeThought,
} = require("../../controllers/userController");

// /api/users
router.use("/").get(getUsers).post(createUser);

// /api/users/:usersId
router.route("/:userId").get(getSingleUser).delete(deleteUser);

// /api/users/:userId/thoughts
router.use("/:userId/thoughts").post(addThought);

// /api/users/:userId/thoughts/:thoughtId
router.use("/:userId/thoughts/:thoughtsId").delete(removeThought);

module.exports = router
