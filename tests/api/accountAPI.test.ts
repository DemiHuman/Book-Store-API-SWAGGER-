import test, { expect } from '../../tests/baseTest';
import UserUtils from "../../utils/userUtils";
import User from "../../data/model/user";
import { UserResponse, TokenResponse } from '../../api/types';

test.describe("Account API", () => {
    test("Account API test", async ({ api}) => {
        let randomUser: User;
        let tokenResponse: TokenResponse;
        let userResponse: UserResponse;

        await test.step("Generate new user", () => randomUser = UserUtils.getUser());
        await test.step("Add new user", async () => {
                userResponse = await (await api.addUser(randomUser)).json()});
        await test.step("Generate token", async () => {
            tokenResponse = await (await api.generateToken(randomUser)).json()});
        await test.step("Check getting user. Return 200", async () => {
            let responseStatus = (await api.getUser(userResponse.userID, tokenResponse.token)).status();
            expect(responseStatus).toBe(200);
        });
    })
})