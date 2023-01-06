const {Router} = require("express")
const controllers = require("./contoller")

const router = Router();

router.get("/", controllers.getBlog)
router.get("/:id", controllers.getBlogByID)
router.post("/create", controllers.createBlog)
router.put("/update/:id", controllers.updateBlog)
router.delete('/delete/:id', controllers.deleteBlog)

module.exports = router
