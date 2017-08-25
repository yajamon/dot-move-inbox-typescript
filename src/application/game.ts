export class Game {
    turn = 0;
    constructor() {
    }

    start() {
        this.initialize();

        this.render();
        let intervalId = setInterval(()=>{
            this.update();
            if(this.isClear()) {
                clearInterval(intervalId);
            }
            this.render();
        }, 1000);
    }

    initialize(){
    }

    update(){
        this.turn += 1;
    }

    render(){
        if (this.isClear()){
            console.log("finish.");
            return;
        }
        console.log("render turn :"+ this.turn);
    }

    isClear(): boolean{
        return this.turn > 10;
    }
}
