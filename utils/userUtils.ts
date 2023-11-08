import { faker } from '@faker-js/faker';
import User from "../data/model/user";

export default class UserUtils {
    public static getUser(): User {
        let user = new User;
        user.username = faker.internet.userName();
        user.password = "123456Qq*";
        return user;
    }
}