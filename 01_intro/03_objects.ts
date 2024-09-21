// const user = {
//     name: "shubham",
//     email: "ex@gmail.com",
//     isActive: false
// }

// function createUser({name: string, isPaid: boolean}){};
// let newUser = {name: "shuabhm", isPaid: false, email: "wx@gmail.com"}
// createUser(newUser)

// function createCourse(): {courseName: string, price: Number}{
//     return {courseName: "reactJs", price: 399}
// }



// +++++++++++++++++++++ type aliases +++++++++++++++++++++++++++++++++++++==
// type User = {
//     name: string,
//     email: string,
//     isActive: boolean
// }

// function createUser(user: User): User{
//     return {name: "", email: "", isActive: true}
// }
// createUser({name: "", email: "", isActive: true})



type User = {
    readonly _id: string,
    name: string,
    email: string,
    isActive: boolean
    creditcardDetails?: number //for optional we include question mark
}

let myUser: User = {
    _id: "12",
    name: "sh",
    email: "s@s.com",
    isActive: false
}
myUser.email = "s@gmail.com";
// myUser._id = "assa"   //you can change it because it hase read-only property


type cardNumber = {
    cardnumber: string
}
type cardDate = {
    cardDate: string
}
type cardDetails = cardNumber & cardDate & {
    cvv: number
}


export{}