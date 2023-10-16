import test, { expect } from '../../tests/baseTest';
import User from "../../data/model/user";

test.describe("Authorization form", () => {
    test("Basic authorization test", async ({ page, bookstorePage,api }) => {
        let user: User;

        await test.step("Open mainpage", async () => bookstorePage.openPage());
        await test.step("Create new user", async () => user = await bookstorePage.createNewUser())
        await page.waitForTimeout(5000);
    })
})