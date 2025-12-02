import { CreateUserRepository } from "../../repositories/create-user-repository.js";
import { CreateUserBody } from "../../models/models.js";
import { HttpStatusCode } from "../../protocols.js";
interface HandleRequest {
    body: CreateUserBody;
}
export declare class CreateUserController {
    private readonly createUserRepository;
    constructor(createUserRepository: CreateUserRepository);
    handle({ body }: HandleRequest): Promise<HttpStatusCode>;
}
export {};
//# sourceMappingURL=create-user-controller.d.ts.map