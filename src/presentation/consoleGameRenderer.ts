import { Game } from "../application/game";
import { Entity } from "../domain/entity";
import { EntityExistence } from "../domain/entityExistence";
import { World } from "../domain/world";
import { GameRenderer } from "./gameRenderer";

export class ConsoleGameRenderer implements GameRenderer {

    public render(game: Game) {
        if (game.isClear()) {
            process.stdout.write("finish.\n");
            return;
        }
        process.stdout.write(this.generateWorld(game.world));
        process.stdout.write("render turn :" + game.turn.value + "\n");
    }

    public generateWorld(world: World): string {
        let lines: string[] = [];
        for (let row = 0; row < world.size.height.value; ++row) {
            const entities = world.entityExistence
                .filter((e) => e.point.y.value === row)
                .reduce((prev: Entity[], current) => {
                    prev[current.point.x.value] = current.entity;
                    return prev;
                }, []);
            let line = "";
            for (let col = 0; col < world.size.width.value; ++col) {
                const e = entities[col];
                line += this.generateEntity(e);
            }
            lines[row] = line;
        }
        lines = lines.map((line) => "|" + line + "|\n");
        lines.unshift("_".repeat(world.size.width.value + 2) + "\n");
        lines.push("\"".repeat(world.size.width.value + 2) + "\n");
        return lines.join("");
    }

    public generateEntity(entity: Entity | null) {
        if (entity == null) {
            return " ";
        }
        return ".";
    }
}
