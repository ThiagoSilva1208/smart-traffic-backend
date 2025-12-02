import { User } from "../models/models.js";

export abstract class LoginUserRepository{
    abstract Login(name: string, email: string, password: string): any
}