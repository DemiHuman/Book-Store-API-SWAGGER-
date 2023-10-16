import { APIResponse } from "playwright";
import User from "../../data/model/user";
import AccountBaseApi from "./accountBaseAPI";
import {expect} from "@playwright/test";

export default class AccountAPI extends AccountBaseApi {

    private userPath = "/User";
    private generateTokenPath = "/GenerateToken";

    constructor(request) {
        super(request);
    }
    public async addUser(User: User): Promise<APIResponse> {
        let response = await this.request.post(this.basePath + this.userPath, {
            data: {
                "userName": User.username,
                "password": User.password
            }
        });

        expect(response.status(), await response.text()).toBe(201);
        return response;
    }

    public async generateToken(User: User): Promise<APIResponse> {
        let response = await this.request.post(this.basePath + this.generateTokenPath, {
            data: {
                "userName": User.username,
                "password": User.password
            }
        });

        expect(response.status(), await response.text()).toBe(200);
        return response;
    };

    public async getUser(userID: string, token: string): Promise<APIResponse> {
        let response: APIResponse = await this.request.get(this.basePath + this.userPath + "/" + userID, {
            headers: {
                "accept": "application/json",
                "Authorization": "Bearer " + token,
            }
        });

        expect(response.status(), await response.text()).toBe(200);
        return response;
    }
}