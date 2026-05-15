import DataBase from '../database/db';
import { Category } from '../entities/category.entity';
import { ICategory } from '../interfaces/category.interface';


export class CategoryService {
    private database = DataBase.getDataBaseInstance();
    private categoryRepository = this.database.getDataSource().getRepository(Category);

    async getAllCategories() {
        return await this.categoryRepository.find();
    }

    async getCategoryById(id: string) {
        const category = await this.categoryRepository.findOneBy({ id });

        if (category !== null) {
            const response = {
                id: category.id,
                name: category.name
            }

            return response
        }

        return null
    }

    async createCategory(category: ICategory) {
        const newCategory = new Category();
        newCategory.name = category.name;

        return await this.categoryRepository.save(newCategory)
    }

    async updateCategory(id: string, newCategory: Partial<ICategory>) {
        const oldCategory = await this.categoryRepository.findOneBy({ id });

        if (!oldCategory) {
            return null;
        }

        const updatedCategory = {
            name: newCategory.name ?? oldCategory.name
        }

        await this.categoryRepository.update(id, updatedCategory)

        return updatedCategory;
    }

    async deleteCategoryById(id: string) {
        try {
            const result = await this.categoryRepository.delete(id);
            return result.affected !== 0;
        } catch (error) {
            console.error("Error al eliinar la categoria: ", error);
            return false;
        }
    }
}