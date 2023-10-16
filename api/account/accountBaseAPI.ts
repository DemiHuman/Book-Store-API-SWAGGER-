export default class AccountBaseAPI {

    protected basePath = "https://bookstore.toolsqa.com/Account/v1";
    protected request;

    constructor(request) {
        this.request = request;
    }
}