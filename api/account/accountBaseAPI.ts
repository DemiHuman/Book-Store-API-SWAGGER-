import {APIResponse} from "playwright";
import User from "../../data/model/user";

export default class AccountBaseAPI {

    protected basePath = "https://bookstore.toolsqa.com/Account/v1";
    protected request;
    constructor(request) {
        this.request = request;
    }

    public async post(user: User, path: string): Promise<APIResponse> {
        let response = await this.request.post(path, {
            data: {
                "userName": user.username,
                "password": user.password
            }
        });

        return response;
    }
}