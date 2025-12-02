import { LoginUserRepository } from "../../repositories/login-user.js";
import { LoginUserBody } from "../../models/models.js";
interface HandleRequest {
    body: LoginUserBody;
}
export declare class LoginUserController {
    private readonly loginUserRepository;
    constructor(loginUserRepository: LoginUserRepository);
    handle({ body }: HandleRequest): Promise<{
        login: any;
    }>;
}
export {};
//# sourceMappingURL=login-user-controller.d.ts.map