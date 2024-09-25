function detectType(val: number | string){
    if(typeof val === "string"){
        return val.toLowerCase()
    }
    return val + 3
}


function provideId(id: string | null){
    if(!id){
        console.log("provide an id");
        return
        
    }
    id.toLowerCase()
}


interface user{
    name: string,
    email: string,
}
interface Admin{
    name: string,
    email: string,
    isAdmin: boolean
}
function isAdminAccount(account: user |  Admin){
    if("isAdmin" in account){
        return account.isAdmin
    }
}



function logValue(x: Date | string){
    if( x instanceof Date){
        console.log(x.toUTCString());
        
    }else{
        console.log(x.toUpperCase());
        
    }
}

type Fish = { swim: () => void}
type bird = { fly: () => void}

function isFish(pet: Fish | bird): pet is Fish{
    return (pet as Fish).swim != undefined
}

function getFood(pet: Fish | bird){
    if(isFish(pet)){
        return "fish Food"
    }else{
        return "bird food"
    }
}


interface circle {
    
}