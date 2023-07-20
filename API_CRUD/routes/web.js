import  express  from "express"
// const router=express.Router();
const router=express.Router()
import crudController from "../controllers/crudApiController.js"

router.get('/',crudController.getAllDoc)
router.post('/',crudController.createDoc)
router.get('/:id',crudController.getSingleDocById)
router.put('/:id',crudController.updateDocById)
router.delete('/:id',crudController.deleteDocById)

export default router