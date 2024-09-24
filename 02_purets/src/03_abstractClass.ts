abstract class takePhoto{
    constructor(
        public cameraMode: string,
        public filter: string
    ){}

    abstract getSepia(): void
    getReelTime(): number{
        // some calculation
        return 8
    }
}

// const sh = new TakePhoto("test", "test")

class instagram extends takePhoto{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){ super(cameraMode, filter) }

    getSepia(): void {
        console.log("something");
        
    }
}
const sh = new instagram("test", "test", 3)
