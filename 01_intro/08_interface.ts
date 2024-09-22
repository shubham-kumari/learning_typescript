interface user{
    readonly dbID: number
    email: string
    userId: number
    googleId?: string
    // startTrial: () => string
    startTrial(): string
    getCoupon(couponName: string, value: number): number
}

const shubhm: user = {dbID: 22,  email: "s@s.com", userId: 22111,
    startTrial: () => {
        return "trial started"
    },
    getCoupon: (name: "shuubham10", off: 10) => {
        return 10;
    }
} 
shubhm.email = "s@gmail.com"
// shubhm.googleId = 45