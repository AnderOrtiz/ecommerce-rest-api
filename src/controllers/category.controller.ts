import { Request, Response } from 'express';
import { CategoryService } from '../services/category.service';
import { ICategory } from '../interfaces/category.interface';

export class CategoryController {


    constructor(private categoryService: CategoryService) { }

    async getAllCategories(req: Request, res: Response) {
        const categories = await this.categoryService.getAllCategories();

        res.status(200).json({
            data: categories
        });
    }

    async getCategoryById(req: Request, res: Response) {
        const id = String(req.params.id)
        const category = await this.categoryService.getCategoryById(id)

        res.status(200).json({
            data: category
        });

    }

    async createCategory(req: Request, res: Response) {
        const category = req.body;

        await this.categoryService.createCategory(category);

        res.status(201).json({
            message: "Categoria creada exitosamente"
        })
    }

    async updateCategory(req: Request, res: Response) {
        const id = String(req.params.id);
        const category: Partial<ICategory> = req.body;

        // console.log("id:", id);
        // console.log("body:", category);

        const updatedCategory = await this.categoryService.updateCategory(id, category);

        if (!updatedCategory) {
            return res.status(404).json({
                message: "Categoría no encontrada"
            });
        }

        res.status(200).json({
            message: "Categoría actualizada exitosamente",
            data: updatedCategory
        });
    }

    async deleteCategory(req: Request, res: Response) {
        const id = String(req.params.id)

        const deletedCategory = await this.categoryService.deleteCategoryById(id)

        if (!deletedCategory) {
            return res.status(404).json({
                message: "Categoria no encontrada"
            })
        }
        res.status(200).json({
            message: "Categoria eliminada exitosamente"
        })

    }

}