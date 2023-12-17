// server.ts
import express from 'express';
import router from "./Routes/router";

const server = express();
const PORT = 3333;

server.use(express.json());
server.use(router); // Use o roteador aqui

server.listen(PORT, () => console.log(`Servidor ativo na porta ${PORT}`));
