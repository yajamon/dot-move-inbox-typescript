import { Entity } from "../domain/entity";
import { Point } from "../domain/point";
import { Turn } from "../domain/turn";
import { World } from "../domain/world";
import { GameRenderer } from "../presentation/gameRenderer";
import { GameConfig } from "./gameConfig";

export class Game {
    public turn: Turn;
    public world: World;
    private renderer: GameRenderer;
    constructor(private config: GameConfig) {
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
        const config = this.config;
        this.turn = new Turn(0);
        this.renderer = config.renderer;
        this.world = new World(config.worldSize);

        const x = Math.floor(Math.random() * config.worldSize.width.value);
        const y = Math.floor(Math.random() * config.worldSize.height.value);
        this.world.addEntity(new Entity(), Point.make(x, y));
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
