export class Player{
    constructor(GameArea, InputHandler){
        this.GameArea = GameArea
        this.width = 40
        this.height = 40
        this.x = 20
        this.y = 20
        this.lastX = 19
        this.lastY = 20
        this.moving = false
        this.velocity = 2
        this.inputHandler = InputHandler
        this.parts = []
        this.score = 0
    }


    update(ctx){
        this.lastX = this.x
        this.lastY = this.y
        if(this.inputHandler.isPressed('w')){
            if(this.y>0){
                this.y-=this.velocity
                this.moving = true
            }
            
        }
        if(this.inputHandler.isPressed('a')){
            if(this.x>0){
                this.x-=this.velocity
                this.moving = true
            }
        }
        if(this.inputHandler.isPressed('s')){
            if(this.y+this.height < this.GameArea.canvas.height){
                this.y+=this.velocity
                this.moving = true

            }
        }
        if(this.inputHandler.isPressed('d')){
            if(this.x+this.width < this.GameArea.canvas.width){
            this.x+=this.velocity
            this.moving = true
            }
        }
        for(let i = this.parts.length-1; i >= 0; i--){
            if(this.moving){
                if(i == 0){
                    this.parts[0] = [this.lastX, this.lastY]
                } else{
                    this.parts[i] = this.parts[i-1]
                }
            }
        }
        this.moving = false


    }
    draw(ctx){
        
        ctx.fillStyle = "black"
        for(let i = 0; i < this.parts.length; i++){
            try{
                ctx.fillRect(this.parts[i][0], this.parts[i][1], this.width, this.height)
            } catch{
            }
        }
        ctx.fillStyle = "red"
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
    addPart(){
        this.parts.push([this.lastX,this.lastY])
    }
}