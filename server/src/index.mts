import { AurumServer } from 'aurum-server';
import { createServer } from 'http';
import { Application } from 'express';
import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const app: Application = express();
const server = createServer(app);

const aurumServer = AurumServer.create({
    reuseServer: server
});

aurumServer.exposeFunction<{ a: number; b: number }, number>(
    'add',
    ({ a, b }) => a + b
);

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static(join(__dirname, '../../client/dist')));

server.listen(3000, () => {
    console.log('listening on 3000');
});
