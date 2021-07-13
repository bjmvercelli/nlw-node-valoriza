import { Request, Response } from "express";
import { ListUserReceivedComplimentsService } from "../services/ListUserReceivedComplimentsService";


class ListUserReceivedComplimentsController {

    async handle(req: Request, res: Response){
        const { user_id } = req;

        const listUserReceivedService = new ListUserReceivedComplimentsService();

        const compliments = await listUserReceivedService.execute(user_id);

        return res.json(compliments);
    }
}

export { ListUserReceivedComplimentsController }