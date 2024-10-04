// tuples is just an array a kind of specialized array that is given to u sby typescrtipr wit some restriction

// const user: (string | number)[] = [1, 'sh']
let user: [string, number, boolean] 
// user = [1, "sjdhjkd", false]
user = ["sh", 32, true]  // order of the arry really matters in tuple

let rgb: [number, number, number] = [255, 221, 111]

type User = [number, string]
const newUser: User = [1, "shubham"]
newUser[1] = "shubham.com"
// newUser.push(true)

export{}