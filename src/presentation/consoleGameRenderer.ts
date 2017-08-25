import { Game } from "../application/game";
import { GameRenderer } from "./gameRenderer";

export class ConsoleGameRenderer implements GameRenderer {

    public render(game: Game) {
        if (game.isClear()) {
            process.stdout.write("finish.\n");
            return;
        }
        process.stdout.write("render turn :" + game.turn.value + "\n");
    }
}
