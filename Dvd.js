export class Dvd{
    constructor(GameArea){
        this.GameArea = GameArea
        this.width = 80
        this.height = 30
        this.x = 50
        this.y = 50
        this.velocity = 2   
    }


    update(ctx){
   
    }
    draw(ctx){
 
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }   
}