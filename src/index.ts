import { Game } from "./application/game";
import { GameConfig } from "./application/gameConfig";
import { Distance } from "./domain/distance";
import { Size } from "./domain/size";
import { ConsoleGameRenderer } from "./presentation/consoleGameRenderer";

const game = new Game({
    renderer: new ConsoleGameRenderer(),
    worldSize: new Size(
        new Distance(16),
        new Distance(4),
    ),
});
game.start();
