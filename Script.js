import { Player } from "./Player.js";
import { Dvd } from "./Dvd.js";

class GameArea{
    constructor(canvasId){
        this.canvas = document.getElementById(canvasId);
        this.entities = []
        
        this.canvas.width = window.innerWidth*0.9
        this.canvas.height = window.innerHeight*0.9
        window.addEventListener("resize", (e)=>{
            this.canvas.width = window.innerWidth*0.9
            this.canvas.height = window.innerHeight*0.9
            this.update()
            this.draw()
        })

        this.ctx = this.canvas.getContext("2d");
        this.player = new Player(this);

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
        this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height)
        for (let i = 0; i<this.entities.length;i++){
            this.entities[i].draw(this.ctx)
        }
        this.player.draw(this.ctx)
    }

    addEntity(object){
        this.entities.push(object)
    }
    
    
}
const game = new GameArea("Canvas");

game.addEntity(new Dvd(game))

function startGameLoop(){
    game.update()
    requestAnimationFrame(startGameLoop) 
}

startGameLoop()
