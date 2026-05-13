import express from 'express';
import DataBase from './database/db';
import userRouter from './routers/user.routes';

const app = express();

async function main() {
    const db = DataBase.getDataBaseInstance();
    await db.init();
}

main();

app.use(express.json());

app.use('/api/', userRouter)

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(3000, () => console.log('Server is running on port 3000'));