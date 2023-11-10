import test, { expect } from "./baseAccountTest";

test.describe("Account API tests", () => {
    test("Create new user", async ({api, user}) => {
        await test.step("Create new user", async () => {
            let response = await api.addUser(user);
            expect(response.status()).toBe(201);
        });
    });

    test("Generate user token", async ({api, user}) => {
        await test.step("Create new user", async () => {
            let response = await api.addUser(user);
            expect(response.status()).toBe(201);
        });

        await test.step("Generate token", async () => {
            let response = await api.generateToken(user);
            expect(response.status()).toBe(200);
        });
    });
});