interface user{
    readonly dbID: number
    email: string
    userId: number
    googleId?: string
    // startTrial: () => string
    startTrial(): string
    getCoupon(couponName: string, value: number): number
}

interface user{
    gitHubToken: string

}
interface Admin extends user{
    role: "admin" | "ta" | "learner"
}

const shubhm: user = {dbID: 22,  email: "s@s.com", userId: 22111, gitHubToken: "gitHub",
    
    startTrial: () => {
        return "trial started"
    },
    getCoupon: (name: "shuubham10", off: 10) => {
        return 10;
    }
} 
const Sujal: Admin = {dbID: 22,  email: "s@s.com", userId: 22111, gitHubToken: "gitHub",
    role: "admin",
    
    startTrial: () => {
        return "trial started"
    },
    getCoupon: (name: "shuubham10", off: 10) => {
        return 10;
    }
} 
shubhm.email = "s@gmail.com"
// shubhm.googleId = 45