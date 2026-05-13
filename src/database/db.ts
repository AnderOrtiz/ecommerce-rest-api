import { DataSource } from "typeorm";
import { User } from "../entities/user.entity";
import { Producto } from "../entities/product.entity";
import { Categoria } from "../entities/category.entity";

export class DataBase {
    private static instance: DataBase;
    private dataSource: DataSource;

    private constructor() {
        const host = process.env.DB_HOST || "localhost";
        const port = Number(process.env.DB_PORT) || 5432;
        const username = process.env.DB_USERNAME || "postgres";
        const password = process.env.DB_PASSWORD || "postgres";
        const database = process.env.DATABASE || "db_ecomerce";

        this.dataSource = new DataSource({
            type: "postgres",
            host,
            port,
            username,
            password,
            database,
            entities: [User, Producto, Categoria],
            synchronize: true,
        });
    }

    public static getDataBaseInstance(): DataBase {
        if (!DataBase.instance) {
            DataBase.instance = new DataBase();
        }
        return DataBase.instance;
    }

    public getDataSource(): DataSource {
        return this.dataSource;
    }

    public async init(): Promise<void> {
        try {
            if (!this.dataSource.isInitialized) {
                await this.dataSource.initialize();
                console.log("Base de datos conectada correctamente");
            }
        } catch (error) {
            console.error("Error al conectar a la base de datos", error);
            process.exit(1);
        }
    }
}

export default DataBase;