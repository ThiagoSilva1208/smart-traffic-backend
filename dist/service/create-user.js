import * as bcrypt from 'bcryptjs';
import { pool } from "../database/postgresql.js";
export class CreateUser {
    async createUser(name, email, password) {
        const data = {
            name,
            email,
            password: await bcrypt.hash(password, 10)
        };
        const result = await pool.query("INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING name", [data.name, data.email, data.password]);
        const createdUser = result.rows[0];
        return createdUser;
    }
}
//# sourceMappingURL=create-user.js.map