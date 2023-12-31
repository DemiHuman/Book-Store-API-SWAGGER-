import { test as baseTest } from '@playwright/test';
import AccountAPI from "../api/account/accountAPI";
import BookstorePage from "../pages/bookstore.page";
import { allure } from "allure-playwright";

type Types = {
    api: AccountAPI,
    bookstorePage: BookstorePage
}

const test = baseTest.extend<Types>({
    api: async ({ request }, use) => { await use(new AccountAPI(request))},
    bookstorePage: async ({ page }, use) => { await use(new BookstorePage(page))},
})

export default test

export const expect = test.expect
export const allureReport = allure