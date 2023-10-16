import { test as baseTest } from '@playwright/test';
import AccountAPI from "../api/account/accountAPI";
import BookstorePage from "../pages/bookstore.page";

type types = {
    api: AccountAPI,
    bookstorePage: BookstorePage
}

const test = baseTest.extend<types>({
    api: async ({ request }, use) => { await use(new AccountAPI(request))},
    bookstorePage: async ({ page }, use) => { await use(new BookstorePage(page))}
})

export default test

export const expect = test.expect