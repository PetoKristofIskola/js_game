import { Player } from "./Player.js";
import { Dvd } from "./Dvd.js";
import { InputHandler } from "./InputHandler.js";

class GameArea{
    constructor(canvasId){
        this.canvas = document.getElementById(canvasId);
        this.entities = []
        
        this.canvas.width = window.innerWidth*0.9
        this.canvas.height = window.innerHeight*0.9
        window.addEventListener("resize", (e)=>{
            this.canvas.width = window.innerWidth*0.9
            this.canvas.height = window.innerHeight*0.9

        })

        this.inputHandler = new InputHandler()
        this.ctx = this.canvas.getContext("2d");
        this.player = new Player(this, this.inputHandler);

        console.log('Game Area init')
    }

    update(){
        this.player.update(this.ctx)
        for (let i = 0; i<this.entities.length;i++){
            this.entities[i].update(this.ctx)
        }
        this.draw()
    }
    draw(){
        this.ctx.lineWidth = 3;
        this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height)
        for (let i = 0; i<this.entities.length;i++){
            this.entities[i].draw(this.ctx)
        }
        //this.ctx.beginPath()
        //for (let i = 0; i<this.entities.length;i++){
        //    this.entities[i].draw(this.ctx)
        //    try{
        //    this.ctx.moveTo(this.entities[i].x+this.entities[i].width/2, this.entities[i].y+this.entities[i].height/2)
        //    this.ctx.lineTo(this.entities[i+1].x+this.entities[i].width/2, this.entities[i+1].y+this.entities[i].height/2)
        //    }catch{
        //        this.ctx.moveTo(this.entities[i].x+this.entities[i].width/2, this.entities[i].y+this.entities[i].height/2)
        //        this.ctx.lineTo(this.entities[0].x+this.entities[i].width/2, this.entities[0].y+this.entities[i].height/2)
//
        //    }
        //}
        //this.ctx.stroke()
        this.player.draw(this.ctx)
        
        
    }

    addEntity(object){
        this.entities.push(object)
    }
    
    
}
const game = new GameArea("Canvas");
//for(let i = 0; i < 360; i+=1){
//    game.addEntity(new Dvd(game, i))
//}

game.addEntity(new Dvd(game))



function startGameLoop(){
    game.update()
    requestAnimationFrame(startGameLoop) 
}

startGameLoop()
