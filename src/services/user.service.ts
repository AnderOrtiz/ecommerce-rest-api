import { User } from "../entities/user.entity";
import { DataBase } from "../database/db";
import { IUser, IUserResponse } from '../interfaces/user.interface';


export class UserService {
    private database = DataBase.getDataBaseInstance();
    private userRepository = this.database.getDataSource().getRepository(User);

    getAllUsers() {
        return this.userRepository.find();
    }

    async getUserById(id: string) {
        const user = await this.userRepository.findOneBy({ id });

        if (user !== null) {
            const response: IUserResponse = {
                id: user.id,
                name: user.name,
                email: user.email
            }
            return response;
        }

        return null;
    }

    createUser(user: IUser) {
        const newUser = new User();
        newUser.name = user.name;
        newUser.email = user.email;
        newUser.password = user.password;

        return this.userRepository.save(newUser);
    }

    async updateUser(id: string, user: Partial<IUser>) {
        const oldUser = await this.userRepository.findOneBy({ id });

        if (oldUser === null) {
            return null;
        }

        const updatedUser = {
            name: user.name ?? oldUser.name,
            email: user.email ?? oldUser.email,
            password: user.password ?? oldUser.password,
        }

        await this.userRepository.update(id, updatedUser);

        return updatedUser;
    }

    async deleteUserById(id: string): Promise<boolean> {
        try {
            const result = await this.userRepository.delete(id);
            return result.affected !== 0;
        } catch (error) {
            console.error("Error al eliminar usuario:", error);
            return false;
        }
    }
}
