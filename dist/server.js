import Fastify from 'fastify';
import { CreateUserController } from "./controllers/user-controller/create-user-controller.js";
import { CreateUser } from "./service/create-user.js";
import { LoginUser } from './service/login-user.js';
import { LoginUserController } from './controllers/login/login-user-controller.js';
import { HttpStatusCode } from "./protocols.js";
import jwt from './auth/plugins/jwt.js';
import fastifyCookie from '@fastify/cookie';
import cors from "@fastify/cors";
export const app = Fastify({ logger: true });
app.register(jwt);
app.register(fastifyCookie);
app.register(cors, {
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "PUTCH", "DELETE"],
    credentials: true,
});
app.get("/", async (request, reply) => {
    reply.send("Hello World");
});
app.post("/users", async (request, reply) => {
    const createuser = new CreateUser();
    const createusercontroller = new CreateUserController(createuser);
    const result = await createusercontroller.handle({ body: request.body });
    return reply.status(HttpStatusCode.Created).send(result);
});
app.post("/login", async (request, reply) => {
    const loginuser = new LoginUser();
    const loginusercontroller = new LoginUserController(loginuser);
    const { login } = await loginusercontroller.handle({ body: request.body });
    return reply.status(HttpStatusCode.OK).send({ login, message: "Usuário autenticado" });
});
const start = async () => {
    try {
        await app.listen({ port: 3333 });
    }
    catch (err) {
        throw new Error();
    }
};
start();
//# sourceMappingURL=server.js.map