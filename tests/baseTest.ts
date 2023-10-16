import { test as baseTest } from '@playwright/test'

type pages = {

}

const test = baseTest.extend<pages>({
    // baseURL: "https://bookstore.toolsqa.com/swagger/#/"
})

export default test

export const expect = test.expect