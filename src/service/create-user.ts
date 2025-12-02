import * as bcrypt from 'bcryptjs'
import { CreateUserRepository } from '../repositories/create-user-repository.js';
import { User } from '../models/models.js';
import { pool } from "../database/postgresql.js"
import { HttpStatusCode } from '../protocols.js';


export class CreateUser implements CreateUserRepository{
    async createUser(name: string, email: string, password: string): Promise<User> {
        const data = {
            name,
            email,
            password: await bcrypt.hash(password, 10)
        }
       
        const result = await pool.query("INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING name", [ data.name, data.email, data.password])

        const createdUser = result.rows[0];

         return createdUser;
    }
}