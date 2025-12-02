import { LoginUserRepository } from "../repositories/login-user.js";
export declare class LoginUser implements LoginUserRepository {
    Login(name: string, email: string, password: string): Promise<{
        name: any;
        token: string;
    }>;
}
//# sourceMappingURL=login-user.d.ts.map