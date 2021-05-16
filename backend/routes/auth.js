const Router = require("express");

const authController = require("../controllers/auth");

const adminMiddleware = require("../middleware/adminMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");

const router = new Router();

router.post("/registration", authController.registration);
router.get("/login", authController.login);
router.get("/users", adminMiddleware, authController.getUsers);

module.exports = router;
