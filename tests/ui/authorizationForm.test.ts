import test, { expect } from '../../tests/baseTest';
import User from "../../data/model/user";
import UserUtils from "../../utils/userUtils";

test.describe("Authorization form", () => {
    test("Basic authorization test", async ({ page, bookstorePage,api }) => {
        let user: User;

        await test.step("Open the bookstore's api page", async () => await bookstorePage.openPage());
        await test.step("Create new user", async () => {
            user =  UserUtils.getUser();
            await api.addUser(user);
        });
        await test.step("Open authorization form", () => bookstorePage.openAuthorizationForm());
        await test.step("Filing credentials", () => bookstorePage.fillCredentials(user));
        await test.step("Click Authorize button",  () => page.click(bookstorePage.elements.modalAuthorizeBtn));
        await test.step("Checking of available Logout button",  async () => {
            expect(await page.isVisible(bookstorePage.elements.modalLogoutBtn)).toBeTruthy()});
        await test.step("Close modal window", () => page.click(bookstorePage.elements.modalCloseBtn));
        await test.step("Check the modal form was closed", async () => {
            expect(page.isHidden(bookstorePage.elements.modalHeader)).toBeTruthy()});
    })
})