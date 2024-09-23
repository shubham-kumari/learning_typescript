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
class User{

    protected _courseCount = 1

    readonly city: string = "patna"
    // private readonly city: string = "patna"
    constructor(
        public email: string,
        public name: string,
        // private userId: number
    ){}

    private deleteToken(){
        console.log("token deleted");
        
    }

    get getAppleEmail(): string{
        return `apple${this.email}`
    } 
    get courseCount(): number{
        return this._courseCount
    }
    set courseCount(courseNumber){
        if(courseNumber < 1){
            throw new Error("course count should be more than 1")
        }
        this._courseCount = courseNumber
    }
}

class subUser extends User{
    isFamily: boolean = true
    changeCourseCount(){
        this._courseCount = 4
    }
}

const shubham = new User ("s@s.com", "shubham")
// shubham.deleteToken()
// shubham.city = "patna"
// shubham.city

