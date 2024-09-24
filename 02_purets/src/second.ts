interface TakePhoto {
  cameraMode: string;
  filter: string;
  burst: number;
}

interface story{
    createStory(): void
}


class Instagram implements TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {}
}

class YouTube implements TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number,
    public short: string,
  ) {}

  createStory(): void{
    console.log("story was created");
    
  }
}
