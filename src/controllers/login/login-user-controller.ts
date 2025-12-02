import { LoginUserRepository } from "../../repositories/login-user.js"
import { LoginUserBody } from "../../models/models.js"
import { HttpStatusCode } from "../../protocols.js"

interface HandleRequest{
    body: LoginUserBody
}

export class LoginUserController{
    constructor (private readonly loginUserRepository: LoginUserRepository) {}

    async handle({ body }: HandleRequest){
        try{
            const { name, email, password } = body

            console.log(name, email, password)

            if (!name || !email || !password) {
                throw new Error("Missing required fields")
            }

            const login = await this.loginUserRepository.Login(name, email, password)

            return { login }
        }

        catch(error){
            console.error("Erro no login-user-controller " + error)
            throw HttpStatusCode.BadRequest
        }
    }
}