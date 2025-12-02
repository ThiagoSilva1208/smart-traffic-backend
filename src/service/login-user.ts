import { User } from "../models/models.js";
import { HttpStatusCode } from "../protocols.js";
import { LoginUserRepository } from "../repositories/login-user.js";
import * as bcrypt from "bcryptjs"
import { pool } from "../database/postgresql.js";
import { app } from "../server.js"


export class LoginUser implements LoginUserRepository {
    async Login(name: string, email: string, password: string) {
        const data = {
            name,
            email,
            password: await bcrypt.hash(password, 10)
        }

        const result = await pool.query("SELECT id, name, email, password FROM users WHERE name = $1 AND email = $2", [data.name, data.email])

        const user = result.rows[0]

        if (!user) {
            throw new Error("User don't localited")
        }

        const isPasswordValid = await bcrypt.compare(password, user.password)

        if (!isPasswordValid) {
            console.error("Incorrect Password")
            throw HttpStatusCode.Unauthorized
        }

        const token = app.generateToken({
            id: user.id,
            name: user.name,
            email: user.email,
        });

        const return_login ={
            name: user.name,
            token: token
        }

        return return_login
    }
}