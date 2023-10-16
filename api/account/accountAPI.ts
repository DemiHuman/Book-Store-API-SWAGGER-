import { APIResponse } from "playwright";
import User from "../../data/model/user";
import AccountBaseApi from "./accountBaseAPI";
import {expect} from "@playwright/test";

export default class AccountAPI extends AccountBaseApi {

    private userPath = "/User";
    private generateTokenPath = "/GenerateToken";
    public async addUser(User: User): Promise<APIResponse> {
        let response: APIResponse;
        response = await this.request.post(this.basePath + this.userPath, {
            data: {
                "userName": User.username,
                "password": User.password
            }
        });

        expect(response.status(), await response.text()).toBe(200);
        return response;
    }

    public async getUser(userId: String): Promise<APIResponse> {
        let response: APIResponse = await this.request.get(this.basePath + this.userPath + "/" + userId);

        expect(response.status(), await response.text()).toBe(200);
        return response;
    }
}