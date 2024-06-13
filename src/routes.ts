import {FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply} from 'fastify';


export async function routes(fastity: FastifyInstance, options: FastifyPluginOptions) {

    fastity.get("/teste", async (request: FastifyRequest, reply: FastifyReply) => {
        return { ok: true }
    })
    
}