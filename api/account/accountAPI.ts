import { APIResponse } from "playwright";
import User from "../../data/model/user";
import AccountBaseApi from "./accountBaseAPI";
import {expect} from "@playwright/test";

export default class AccountAPI extends AccountBaseApi {

    private userPath = "/User";
    private authorizedPath = "Authorized";
    private generateTokenPath = "/GenerateToken";

    constructor(request) {
        super(request);
    }
    public async addUser(user: User): Promise<APIResponse> {
        let response = await this.post(user, this.basePath + this.userPath);

        expect(response.status(), await response.text()).toBe(201);
        return response;
    };

    public async generateToken(user: User): Promise<APIResponse> {
        let response = await this.post(user, this.basePath + this.generateTokenPath);

        expect(response.status(), await response.text()).toBe(200);
        return response;
    };

    public async makeAuthorizedUser(user: User): Promise<APIResponse> {
        let response = await this.post(user, this.basePath + this.authorizedPath);

        expect(response.status(), await response.text()).toBe(200);
        return response;
    };

    public async deleteUser(userID: string, token: string): Promise<APIResponse> {
        let response: APIResponse = await this.request.delete(this.basePath + this.userPath + "/" + userID, {
            headers: {
                "accept": "application/json",
                "Authorization": "Bearer " + token,
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
    };
}