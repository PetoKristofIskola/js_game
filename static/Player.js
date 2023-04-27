export class Player{
    constructor(GameArea, InputHandler){
        this.GameArea = GameArea
        this.width = 100
        this.height = 100
        this.x = 20
        this.y = 20
        this.velocity = 5
        this.deg = (90 + 180) *-1
        this.rad = this.deg * Math.PI/180
        this.inputHandler = InputHandler
        this.isPressed = this.inputHandler.isPressed

        this.color = "black"
        if (localStorage.color == '' || localStorage.color == undefined){
            this.color = prompt("color (HTML, HEX, RGB, RGBA)")
            localStorage.setItem("color", this.color)
        } else{
            this.color = localStorage.color
        }
    }

    update(ctx){
        if(this.inputHandler.isPressed('w')){
            if(this.y>0){
                this.setHeading(0)
                this.x = this.x+(Math.sin(this.rad)*this.velocity)
                this.y = this.y+(Math.cos(this.rad)*this.velocity)
            } 
        }
        if(this.inputHandler.isPressed('a')){
            if(this.x>0){
                this.setHeading(90*3)
                this.x = this.x+(Math.sin(this.rad)*this.velocity)
                this.y = this.y+(Math.cos(this.rad)*this.velocity)
            }
        }
        if(this.inputHandler.isPressed('s')){
            if(this.y+this.height < this.GameArea.canvas.height){
                this.setHeading(90*2)
                this.x = this.x+(Math.sin(this.rad)*this.velocity)
                this.y = this.y+(Math.cos(this.rad)*this.velocity)
            }
        }
        if(this.inputHandler.isPressed('d')){
            if(this.x+this.width < this.GameArea.canvas.width){
                this.setHeading(90)
                this.x = this.x+(Math.sin(this.rad)*this.velocity)
                this.y = this.y+(Math.cos(this.rad)*this.velocity)
            }
        }
        this.GameArea.sio.emit("playerData", {username:this.GameArea.getUsername(),x: this.x, y: this.y, width:this.width, height:this.height, color:this.color})
    }
    draw(ctx){
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.width, this.height)
        ctx.fillStyle = "black"
    } 
    setHeading(deg){
        this.deg = (deg + 180) *-1
        this.rad = this.deg * Math.PI/180
    }
}