export class InputHandler{
    constructor(){
        this.keyDict = {}
        window.addEventListener('keydown',(e)=>{
            this.keyDict[e.key] = true;
        },true);    
        window.addEventListener('keyup',(e)=>{
            this.keyDict[e.key] = false;
        },true);
    }

    isPressed(key){
        try{
            let keyP = this.keyDict[key]
        }
        catch{
            this.keyDict[key] = false
        } finally{
            let keyP = this.keyDict[key]
            if(keyP){
                return true
            } else{
                return false
            }
        }
        
            

    }
    
}