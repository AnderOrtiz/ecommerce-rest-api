import express from 'express';
import DataBase from './database/db';

const app = express();

async function main() {
    const db = DataBase.getInstance();
    await db.init();
}

main();

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(3000, () => console.log('Server is running on port 3000'));