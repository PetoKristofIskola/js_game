export class Player{
    constructor(GameArea){
        this.GameArea = GameArea
        this.width = 100
        this.height = 100
        this.x = 20
        this.y = 20
        this.velocity = 2
    
        this.keyState = new Object();    
        window.addEventListener('keydown',(e)=>{
            this.keyState[e.key] = true;
        },true);    
        window.addEventListener('keyup',(e)=>{
            this.keyState[e.key] = false;
        },true);
        
    }


    update(ctx){
        if(this.keyState["w"]){
            if(this.y>0){
                this.y-=this.velocity
            }
            
        }
        if(this.keyState["a"]){
            if(this.x>0){
                this.x-=this.velocity
            }
        }
        if(this.keyState["s"]){
            if(this.y+this.height < this.GameArea.canvas.height){
                this.y+=this.velocity
            }
        }
        if(this.keyState["d"]){
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