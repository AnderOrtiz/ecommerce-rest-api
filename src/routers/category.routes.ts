import { Router, Response, Request } from "express";
import { CategoryService } from "../services/category.service";
import { CategoryController } from '../controllers/category.controller';


const categoryRouter = Router(),

    categoryService = new CategoryService(),

    categoryController = new CategoryController(categoryService);

categoryRouter.get('/category', (req: Request, res: Response) => categoryController.getAllCategories(req, res));

categoryRouter.get('/category/:id', (req: Request, res: Response) => categoryController.getCategoryById(req, res));

categoryRouter.post('/category', (req: Request, res: Response) => categoryController.createCategory(req, res));

categoryRouter.patch('/category/:id', (req: Request, res: Response) => categoryController.updateCategory(req, res));

categoryRouter.delete('/category/:id', (req: Request, res: Response) => categoryController.deleteCategory(req, res));


export default categoryRouter;



