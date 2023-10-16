import { test, expect, APIResponse} from '@playwright/test'
import UserUtils from "../../utils/userUtils";
import User from "../../data/model/user";
import { UserResponse, TokenResponse} from '../../api/types'
import AccountAPI from "../../api/account/accountAPI";

test.describe("Account", () => {
    test("Account test2", async ({ request}) => {
        const api = new AccountAPI(request);
        let user: User;
        let userResponse: APIResponse;
        let tokenResponse: APIResponse;
        let getUserResponse: APIResponse;
        const basePath = "https://bookstore.toolsqa.com/Account/v1";
        const userPath = "/User";
        const generateTokenPath = "/GenerateToken"

        await test.step("Generate user", () => {
            user = UserUtils.getUser();
            console.log(user.username + ": " + user.password);
        });

        await test.step("Add new user", async () => {
            userResponse = await request.post(basePath + userPath, {
                data: {
                    "userName": user.username,
                    "password": user.password
                }
            });

            expect(userResponse.status(), await userResponse.text()).toBe(201);
        });

        const postUserResponseBody: UserResponse = await userResponse.json();

        await test.step("Authorized", async () => {
            tokenResponse = await request.post(basePath + generateTokenPath, {
                data: {
                    "userName": user.username,
                    "password": user.password
                }
            });

            expect(tokenResponse.status(), await tokenResponse.text()).toBe(200);
        });

        const tokenResponseBody: TokenResponse= await tokenResponse.json();

        await test.step("Check user", async () => {
            getUserResponse = await request.get(basePath + userPath + "/" + postUserResponseBody.userID, {
                headers: {
                    "accept": "application/json",
                    "Authorization": "Bearer " + tokenResponseBody.token,
                }
            });

            expect(getUserResponse.status(), await getUserResponse.text()).toBe(200);
        });

        console.log(tokenResponseBody);
    })
})