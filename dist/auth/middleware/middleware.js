import { HttpStatusCode } from '../../protocols.js';
export const authMiddleware = async (request, reply) => {
    try {
        const authHeader = request.headers.authorization;
        if (!authHeader) {
            return reply.status(HttpStatusCode.Unauthorized).send({
                error: 'Token de autenticação não fornecido'
            });
        }
        const [bearer, token] = authHeader.split(' ');
        if (bearer !== 'Bearer' || !token) {
            return reply.status(HttpStatusCode.Unauthorized).send({
                error: 'Formato do token inválido. Use: Bearer <token>'
            });
        }
        const decoded = await request.jwtVerify();
        request.user = decoded;
    }
    catch (error) {
        request.log.error('Erro na autenticação:' + error);
        if (error instanceof Error) {
            if (error.message.includes('expired')) {
                return reply.status(HttpStatusCode.Unauthorized).send({
                    error: 'Token expirado',
                    code: 'TOKEN_EXPIRED'
                });
            }
            if (error.message.includes('invalid') || error.message.includes('malformed')) {
                return reply.status(HttpStatusCode.Unauthorized).send({
                    error: 'Token inválido',
                    code: 'TOKEN_INVALID'
                });
            }
        }
        return reply.status(HttpStatusCode.Unauthorized).send({
            error: 'Falha na autenticação'
        });
    }
};
//# sourceMappingURL=middleware.js.map