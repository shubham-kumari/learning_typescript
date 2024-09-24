"use strict";
class takePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getReelTime() {
        // some calculation
        return 8;
    }
}
// const sh = new TakePhoto("test", "test")
class instagram extends takePhoto {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepia() {
        console.log("something");
    }
}
const sh = new instagram("test", "test", 3);
