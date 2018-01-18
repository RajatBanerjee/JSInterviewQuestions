/*ECMAScript 6 — syntactic sugar: reduced | traditional */
class Shape {
    constructor (id, x, y) {
        this.id = id
        this.move(x, y)
    }
    move (x, y) {
        this.x = x
        this.y = y
    }
}

/*ECMAScript 5 — syntactic sugar: reduced | traditional*/
var Shape = function (id, x, y) {
    this.id = id;
    this.move(x, y);
};
Shape.prototype.move = function (x, y) {
    this.x = x;
    this.y = y;
};


class  x {
 constructor (x){
     this.x =10
 } 
    
    call = function(){
        console.log(this.x)
    }
}

var y = new x
