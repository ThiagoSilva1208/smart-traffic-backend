import { CreateUserRepository } from "../../repositories/create-user-repository.js"
import { CreateUserBody } from "../../models/models.js"
import { HttpStatusCode } from "../../protocols.js"


interface HandleRequest {
    body: CreateUserBody
}

export class CreateUserController {
    constructor(private readonly createUserRepository: CreateUserRepository) { }

    async handle({ body }: HandleRequest) {
        try {
            const { name, email, password } = body

            console.log(name, email, password)

            if (!name || !email || !password) {
                throw new Error("Missing required fields")
            }

            const createUser = await this.createUserRepository.createUser(name, email, password)

            return HttpStatusCode.Created
            

        }

        catch (err) {
            console.error("Erro no create-user-controller:", err);
            throw err;
        }


    }
}