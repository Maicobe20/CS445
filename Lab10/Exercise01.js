class Regular{
  constructor(){
      this.lumens = [50,100];
      this.last = "1 year";
  }
   
}

class Energy{
    constructor(color){
        this.lumens = [50, 100];
        this.last = "1 year";
        this.color = color
    }
     
  }

  class Factory {
      createBulb(b,color){
          let bulb;
          if(b === "regular"){
              bulb = new Regular()
          }else if(b === "energy"){
              bulb = new Energy(color)
          }
          return bulb;
      }
  }

  const bulbs = [];
const factory = new Factory();

bulbs.push(factory.createBulb("regular"));
bulbs.push(factory.createBulb("energy", "red"));


for (let i = 0, len = bulbs.length; i < len; i++) {
    console.log(bulbs[i]);
}
