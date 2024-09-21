// const user: (string | number)[] = [1, 'sh']
let user: [string, number, boolean] 
user = ["sh", 32, true]

let rgb: [number, number, number] = [255, 221, 111]

type User = [number, string]
const newUser: User = [1, "shubham"]
newUser[1] = "shubham.com"
// newUser.push(true)

export{}