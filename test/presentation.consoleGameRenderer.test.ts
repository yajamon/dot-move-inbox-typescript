import { expect } from "chai";
import { Distance } from "../src/domain/distance";
import { Entity } from "../src/domain/entity";
import { Point } from "../src/domain/point";
import { Size } from "../src/domain/size";
import { World } from "../src/domain/world";
import { ConsoleGameRenderer } from "../src/presentation/consoleGameRenderer";

describe("ConsoleGameRenderer", function() {
    describe("#generateWorld()", function() {
        it("generate empty size", function() {
            const world = new World(new Size( new Distance(0), new Distance(0) ));
            const render = new ConsoleGameRenderer();
            const expectStage = [
                "__\n",
                '""\n',
            ].join("");
            expect(render.generateWorld(world)).to.equal(expectStage);
        });
        it("generate width: 8 height: 2", function() {
            const world = new World(new Size( new Distance(8), new Distance(2) ));
            const render = new ConsoleGameRenderer();
            const expectStage = [
                "__________\n",
                "|        |\n",
                "|        |\n",
                '""""""""""\n',
            ].join("");
            expect(render.generateWorld(world)).to.equal(expectStage);
        });
        it("generate width: 3 height: 2 entity:(x:2, y:1)", function() {
            const world = new World(new Size(new Distance(3), new Distance(2)));
            world.addEntity(new Entity(), Point.make(2, 1));

            const render = new ConsoleGameRenderer();
            const expectStage = [
                "_____\n",
                "|   |\n",
                "|  .|\n",
                '"""""\n',
            ].join("");
            expect(render.generateWorld(world)).to.equal(expectStage);
        });
    });

    describe("#generateEntity()", function() {
        it("generate with Entity", function() {
            const entity = new Entity();
            const render = new ConsoleGameRenderer();
            const expectEntity = ".";
            expect(render.generateEntity(entity)).to.equal(expectEntity);
        });

        it("generate with null", function() {
            const render = new ConsoleGameRenderer();
            const expectEntity = " ";
            expect(render.generateEntity(null)).to.equal(expectEntity);
        });
    });
});
