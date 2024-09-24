const score: Array<number> = []
const names: Array<string> = []

function identityOne(val: boolean | number): boolean | number{
    return val
}

function identitiTwo(val: any):any{
    return val
}

function identityThree<Type>(val: Type): Type{
    return val;
}

identityThree("3")


function identityFour<T>(val: T): T{
    return val
}

interface bottle{
    brand: string,
    type: number,

}

// identityFour<bottle>({})


function getSearchProducts<T>(product: T[]): T{
    // do some database operation
    const myIndex = 3
    return product[myIndex]
}

// arrow function
const getMoreSearchProducts = <T,>(product: T[]): T => {
   // do some database operation
   const myIndex = 4
   return product[myIndex] 
}


interface dataBase{
    connection: string,
    username: string,
    password: string
}
// function anotherFunction<T, U extends number>(valOne:T, valTwo:U): object{
//     return{valOne, valTwo}
// }
// anotherFunction(3, "4")

function anotherFunction<T, U extends dataBase>(valOne:T, valTwo:U): object{
    return{valOne, valTwo}
}
// anotherFunction(3, {})


interface quiz{
    name: string,
    type: string,

}

interface course{
    name: string,
    author: string,
    subject: string
}

class sellable<T>{
    public cart: T[] = []
    addToCart(product: T){
        this.cart.push(product)
    }
}