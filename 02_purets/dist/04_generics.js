"use strict";
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
function identitiTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
identityThree("3");
function identityFour(val) {
    return val;
}
// identityFour<bottle>({})
function getSearchProducts(product) {
    // do some database operation
    const myIndex = 3;
    return product[myIndex];
}
// arrow function
const getMoreSearchProducts = (product) => {
    // do some database operation
    const myIndex = 4;
    return product[myIndex];
};
// function anotherFunction<T, U extends number>(valOne:T, valTwo:U): object{
//     return{valOne, valTwo}
// }
// anotherFunction(3, "4")
function anotherFunction(valOne, valTwo) {
    return { valOne, valTwo };
}
class sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
