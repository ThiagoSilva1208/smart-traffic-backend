import fp from "fastify-plugin";
import fastifyJwt from "@fastify/jwt";
import { User } from "../../models/models.js";

export default fp(async (app) => {
  app.register(fastifyJwt, {
    secret: process.env.JWT_SECRET! || "segredo-super-quente",
  });

  app.decorate("generateToken", (user: User) => {
    return app.jwt.sign(user, { expiresIn: "1h" });
  });
});

declare module "fastify" {
  interface FastifyInstance {
    generateToken(user: any): string;
  }
}