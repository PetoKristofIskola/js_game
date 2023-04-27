export class EPlayer{
    constructor(GameArea){
        this.GameArea = GameArea
        this.players = []
        this.GameArea.sio.on("updatePlayers", (pData)=>{
            this.players = pData
        })
    }

    update(ctx){
        
    }
    draw(ctx){
        for(let i = 0; i < this.players.length; i++){
            
            if(this.GameArea.sio.id != this.players[i]['sid']){
                ctx.fillStyle = this.players[i]['color']
                ctx.fillRect(this.players[i]['x'], this.players[i]['y'], this.players[i]['height'], this.players[i]['width'])
                ctx.fillStyle = "black"
                ctx.fillText(this.players[i]['username'],this.players[i]['x'], this.players[i]['y']);
                ctx.fillStyle = "black"
            }
           
            
        }
    } 
    
    setHeading(deg){
        this.deg = (deg + 180) *-1
        this.rad = this.deg * Math.PI/180
    }
}