import { expect, Page, request} from "@playwright/test";
import User from "../data/model/user";
import UserUtils from "../utils/userUtils";
import AccountAPI from "../api/account/accountAPI";

export default class BookstorePage {
    private page: Page;
    readonly url: string = "/swagger"

    constructor(page: Page) {
        this.page = page;
    }

    elements = {
        bookStoreHeader: "//h2[text()='Book Store API']",
        authorizeBtn: "//button[contains(@class,'btn authorize')]",
        username: "'input[name='username']'",
        password: "input[name='password']",
        modalAuthorizeBtn: "(//button[contains(@type,'submit')])[1]",
        logoutBtn: "button[class='btn modal-btn auth button']",
        authorizationsFormHeader: "//h3[text()=''Available authorizations']"
    }

    public async openPage(): Promise<BookstorePage> {
        this.page.goto(this.url);
        expect(await this.page.waitForSelector(this.elements.bookStoreHeader)).toBeTruthy();
        return this;
    }

    public async createNewUser() : Promise<User> {
        let api = new AccountAPI(request);
        let user = UserUtils.getUser();
        await api.addUser(user);
        return user;
    }
}