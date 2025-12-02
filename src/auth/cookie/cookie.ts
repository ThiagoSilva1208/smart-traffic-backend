import fastifyCookie from "@fastify/cookie"
import { app } from "../../server.js"

app.register(fastifyCookie, {
    secret: "SmartTrafficCookie@2025",
    hook: "onRequest"
})