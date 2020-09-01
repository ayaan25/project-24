class Box{
    constructor(x,y,width,height){
        var option = {
          isStatic: true  
        }
        this.body=Bodies.rectangle(x,y,this.width,this.height,options);
        this.width=width;
        this.height=height;
        World.add(world,this.body);
    }
}

