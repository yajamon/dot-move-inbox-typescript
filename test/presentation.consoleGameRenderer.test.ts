import { expect } from "chai";
import { Distance } from "../src/domain/distance";
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
    });
});
