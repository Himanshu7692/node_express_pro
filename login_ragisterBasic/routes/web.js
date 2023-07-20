
import  express  from "express";
const router=express.Router()
import UserController from "../controllers/userController.js";

router.get('/',UserController.home)
router.get('/ragistration',UserController.ragistration)
router.post('/ragistration',UserController.createUserDoc)
router.get('/login',UserController.login)
router.post('/login',UserController.verifyLogin)


export default router;