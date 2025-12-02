import { User } from "../models/models.js"

export abstract class CreateUserRepository{
    abstract createUser(name: string, email: string, password: string ): Promise<User>
}