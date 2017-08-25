import { Game } from "./application/game";
import { ConsoleGameRenderer } from "./presentation/consoleGameRenderer";

const game = new Game(new ConsoleGameRenderer());
game.start();
