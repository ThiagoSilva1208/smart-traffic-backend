import { HttpStatusCode } from "../../protocols.js";
export class CreateUserController {
    createUserRepository;
    constructor(createUserRepository) {
        this.createUserRepository = createUserRepository;
    }
    async handle({ body }) {
        try {
            const { name, email, password } = body;
            console.log(name, email, password);
            if (!name || !email || !password) {
                throw new Error("Missing required fields");
            }
            const createUser = await this.createUserRepository.createUser(name, email, password);
            return HttpStatusCode.Created;
        }
        catch (err) {
            console.error("Erro no create-user-controller:", err);
            throw err;
        }
    }
}
//# sourceMappingURL=create-user-controller.js.map