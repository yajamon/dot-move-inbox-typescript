import { Turn } from "../domain/turn";
export class Game {
    turn: Turn;
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
        this.turn = new Turn(0);
    }

    update(){
        this.turn = this.turn.next();
    }

    render(){
        if (this.isClear()){
            console.log("finish.");
            return;
        }
        console.log("render turn :"+ this.turn);
    }

    isClear(): boolean{
        return this.turn.value > 10;
    }
}
