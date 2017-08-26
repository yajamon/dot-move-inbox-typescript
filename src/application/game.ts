import { Turn } from "../domain/turn";
import { GameRenderer } from "../presentation/gameRenderer";

export class Game {
    public turn: Turn;
    constructor(private renderer: GameRenderer) {
    }

    public start() {
        this.initialize();

        this.render();
        const intervalId = setInterval(() => {
            this.update();
            if (this.isClear()) {
                clearInterval(intervalId);
            }
            this.render();
        }, 1000);
    }

    public initialize() {
        this.turn = new Turn(0);
    }

    public update() {
        this.turn = this.turn.next();
    }

    public render() {
        this.renderer.render(this);
    }

    public isClear(): boolean {
        return this.turn.value > 10;
    }
}
