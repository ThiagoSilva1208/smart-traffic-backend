import { User } from "../models/models.js";
export declare abstract class CreateUserRepository {
    abstract createUser(name: string, email: string, password: string): Promise<User>;
}
//# sourceMappingURL=create-user-repository.d.ts.map