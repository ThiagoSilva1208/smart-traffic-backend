import fp from "fastify-plugin";
import fastifyJwt from "@fastify/jwt";
export default fp(async (app) => {
    app.register(fastifyJwt, {
        secret: process.env.JWT_SECRET || "segredo-super-quente",
    });
    app.decorate("generateToken", (user) => {
        return app.jwt.sign(user, { expiresIn: "1h" });
    });
});
//# sourceMappingURL=jwt.js.map