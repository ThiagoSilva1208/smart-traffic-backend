import { HttpStatusCode } from "../../protocols.js";
export class LoginUserController {
    loginUserRepository;
    constructor(loginUserRepository) {
        this.loginUserRepository = loginUserRepository;
    }
    async handle({ body }) {
        try {
            const { name, email, password } = body;
            console.log(name, email, password);
            if (!name || !email || !password) {
                throw new Error("Missing required fields");
            }
            const login = await this.loginUserRepository.Login(name, email, password);
            return { login };
        }
        catch (error) {
            console.error("Erro no login-user-controller " + error);
            throw HttpStatusCode.BadRequest;
        }
    }
}
//# sourceMappingURL=login-user-controller.js.map