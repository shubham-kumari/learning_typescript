"use strict";
// class User{
//     email: string
//     private name: string
//     readonly city: string = "patna"
//     // private readonly city: string = "patna"
//     constructor(email: string, name: string)
//     {
//         this.email = email
//         this.name = name
//     }
// }
class User {
    // private readonly city: string = "patna"
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        this.city = "patna";
    }
    deleteToken() {
        console.log("token deleted");
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNumber) {
        if (courseNumber < 1) {
            throw new Error("course count should be more than 1");
        }
        this._courseCount = courseNumber;
    }
}
class subUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
const shubham = new User("s@s.com", "shubham");
// shubham.deleteToken()
// shubham.city = "patna"
// shubham.city
