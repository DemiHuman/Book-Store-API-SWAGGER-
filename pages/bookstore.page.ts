import { expect, Page, request} from "@playwright/test";
import User from "../data/model/user";

export default class BookstorePage {
    private page: Page;
    readonly url: string = "/swagger"

    constructor(page: Page) {
        this.page = page;
    }

    elements = {
        bookStoreHeader: "//h2[text()='Book Store API']",
        modalHeader: "//h3[text()='Available authorizations']",

        username: "input[name='username']",
        password: "input[name='password']",

        modalLogoutBtn: "button[class='btn modal-btn auth button']",
        authorizeBtn: "//button[contains(@class,'btn authorize')]",
        modalAuthorizeBtn: "(//button[contains(@type,'submit')])[1]",
        modalCloseBtn: "button[class='close-modal']"
    }

    public async openPage(): Promise<BookstorePage> {
        await this.page.goto(this.url);
        expect(await this.page.waitForSelector(this.elements.bookStoreHeader)).toBeTruthy();
        return this;
    }

    public async openAuthorizationForm() {
        await this.page.click(this.elements.authorizeBtn);
        expect(await this.page.waitForSelector(this.elements.modalHeader)).toBeTruthy();
    }

    public async fillCredentials(user: User) {
        await this.page.fill(this.elements.username, user.username);
        await this.page.fill(this.elements.password, user.password);
    }
}