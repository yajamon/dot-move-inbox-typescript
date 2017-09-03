import { expect } from "chai";
import { Distance } from "../src/domain/distance";
import { Entity } from "../src/domain/entity";
import { Point } from "../src/domain/point";
import { Size } from "../src/domain/size";
import { World } from "../src/domain/world";

describe("World", function() {

    it("has property Size named size", function() {
        const size = new Size(new Distance(8), new Distance(3));
        const world = new World(size);
        expect(world).to.have.property("size").that.is.instanceof(Size);
    });

    it("has property Array named entityExistence", function() {
        const size = new Size(new Distance(8), new Distance(3));
        const world = new World(size);
        expect(world).to.have.property("entityExistence").that.is.instanceof(Array);
    });

    describe("#addEntry()", function() {
        it("receive Entity and Point", function() {
            const size = new Size(new Distance(8), new Distance(3));
            const world = new World(size);
            const e = new Entity();
            const p = Point.make(1, 1);
            world.addEntry(e, p);
            expect(world.entityExistence[0].entity).to.equal(e);
            expect(world.entityExistence[0].point).to.equal(p);
        });
    });
});
