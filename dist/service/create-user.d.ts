import { CreateUserRepository } from '../repositories/create-user-repository.js';
import { User } from '../models/models.js';
export declare class CreateUser implements CreateUserRepository {
    createUser(name: string, email: string, password: string): Promise<User>;
}
//# sourceMappingURL=create-user.d.ts.map