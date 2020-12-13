class Greenblock extends Block{
    constructor(x, y, width, height){
    super(x, y, 20, 30);
    }
    display(){
       fill("green");
       super.display();
    }
};