// function getUpper(val){     val =====> val: string
//     return val.getUpperCase();
// }
// getUpper(4)



function addTwo(num: number): number{
    // num.toUpperCase()
    return num + 2
    // return hello 
}
// addTwo("5")
addTwo(5)



function signUpUser(name: string, email: string, isPaid: boolean){

}
// signUpUser(1, 2, 3)
signUpUser("shubham", "example@gmail.com", false)



// arrow function
let loginUser = (name: string, email: string, isPaid: boolean = false) => {}
loginUser("h", "ex@.com")



// function getValue(myVal: number){
//     if(myVal > 5){
//         return true
//     }
//     return "200 ok"
// }


const getHello = (s: string): string => {
    return ""
}


const heros = ["thor", "ironman", "spiderman"]
// const heros = [1, 2, 3]
heros.map((hero) => {
    return `hero is ${hero}`
})


function consoleError(errMsg: string): void{
    console.log(errMsg);
    
}
function handleError(errMsg: string): never{
    throw new Error(errMsg);
    ;
    
}

export{}