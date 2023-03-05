export class Player{
    constructor(GameArea, InputHandler){
        this.GameArea = GameArea
        this.width = 100
        this.height = 100
        this.x = 20
        this.y = 20
        this.velocity = 2
        this.inputHandler = InputHandler
        this.isPressed = this.inputHandler.isPressed
        console.log('genyo', this.inputHandler.keyDict['w'])
    }


    update(ctx){
        if(this.inputHandler.isPressed('w')){
            if(this.y>0){
                this.y-=this.velocity
            }
            
        }
        if(this.inputHandler.isPressed('a')){
            if(this.x>0){
                this.x-=this.velocity
            }
        }
        if(this.inputHandler.isPressed('s')){
            if(this.y+this.height < this.GameArea.canvas.height){
                this.y+=this.velocity
            }
        }
        if(this.inputHandler.isPressed('d')){
            if(this.x+this.width < this.GameArea.canvas.width){
            this.x+=this.velocity
            }
        }
    }
    draw(ctx){
        ctx.fillStyle = "black"
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }   
}