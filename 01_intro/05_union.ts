let score: number | string | boolean = 33
score = 54;
score = "54"

type  User = {
    name: string,
    id: number
}
type  admin = {
    username: string,
    id: number
}

let shubham: User | admin = {name: "shubham", id: 1}
shubham = {username: "sh", id: 1}


// function getDBid(id: number | string){
//     console.log(`db id is ${id}`);
    
// }
getDBid(2);
getDBid("2");


function getDBid(id: number | string){
    // id.toLowerCase()
    if(typeof id === "string")
        {
            id.toLowerCase()
        }
        // id + 2
}


// array


// const data1: number[] = [1, 2, 3, 4, "5"]
// const data2: number[] = [1, "2","3", "4", "5"]
const data3: (number | string)[] = [1, 2, 3, 4, "5"]

let pi:3.14 = 3.14
// pi = 3.145  // throws error

let seatAllotment: "aisle" | "middle" | "window"
seatAllotment = 'aisle'
// seatAllotment = "crew"

export{}