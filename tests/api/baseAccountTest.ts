import { test as baseTest} from "@playwright/test";
import AccountAPI from "../../api/account/accountAPI"
import User from "../../data/model/user";
import UserUtils from "../../utils/userUtils";
import { allure } from "allure-playwright";

type ApiType = {
    api: AccountAPI
};

type UserType = {
    user: User
};

const test  = baseTest.extend<ApiType & UserType>({
    user: async ({},use) => {await use(UserUtils.getUser())},
    api: async ({ request }, use) => { await use(new AccountAPI(request))}
});

export default test;
export const expect = test.expect;
export const allureReport = allure;