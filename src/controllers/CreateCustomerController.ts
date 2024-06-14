import { FastifyRequest, FastifyReply } from "fastify";
import { CreateCustomerServices } from "../services/CreateCustomerServices";

class CreateCustomerController{
    async handle(resquest: FastifyRequest, reply: FastifyReply){
        const { name, email} = resquest.body as { name: string, email: string };
        

        const customerService = new CreateCustomerServices();

        const customer = await customerService.execute({ name, email });

        reply.send(customer);
    }

}

export { CreateCustomerController }