export class Dvd{
    constructor(GameArea, deg = 38){
        this.GameArea = GameArea
        this.width = 250 //250
        this.height = 90 //90
        this.x = (GameArea.canvas.width/2)-(this.width/2)
        this.y = (GameArea.canvas.height/2)-(this.height/2)
        this.velocity = 10
        this.deg = deg
        this.deg = (this.deg + 180) *-1
        this.rad = this.deg * Math.PI/180
        this.colors = ["red", "green", "blue", "yellow", "purple", "orange"]
        this.currentColor = this.colors[Math.floor(Math.random()*this.colors.length)]
    }


    update(ctx){
        this.x = this.x+(Math.sin(this.rad)*this.velocity)
        this.y = this.y+(Math.cos(this.rad)*this.velocity)
        
        if (this.x+this.width>=this.GameArea.canvas.width){
            this.setHeading(this.deg-180)
            this.currentColor = this.colors[Math.floor(Math.random()*this.colors.length)]
        }
        if (this.x <= 0){
            this.setHeading(this.deg+180)
            this.currentColor = this.colors[Math.floor(Math.random()*this.colors.length)]
        }
        if (this.y+this.height >= this.GameArea.canvas.height){
            this.setHeading(this.deg)
            this.currentColor = this.colors[Math.floor(Math.random()*this.colors.length)]
        }
        if (this.y <= 0){
            this.setHeading(this.deg)
            this.currentColor = this.colors[Math.floor(Math.random()*this.colors.length)]
        }
    }
    draw(ctx){
        ctx.fillStyle = this.currentColor
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }   
    
    setHeading(deg){
        this.deg = (deg + 180) *-1
        this.rad = this.deg * Math.PI/180
    }
}