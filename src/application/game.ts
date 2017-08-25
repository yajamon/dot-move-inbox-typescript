import { Turn } from "../domain/turn";
import { GameRenderer } from "../presentation/gameRenderer";

export class Game {
    turn: Turn;
    constructor(private renderer:GameRenderer) {
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
        this.renderer.render(this);
    }

    isClear(): boolean{
        return this.turn.value > 10;
    }
}
