import { expect } from "chai";
import { Entity } from "../src/domain/entity";
import { EntityExistence } from "../src/domain/entityExistence";
import { Point } from "../src/domain/point";

describe("EntityExistence", function(){

    it("has property of Entity named entity", function(){
        const e = new Entity();
        const p = Point.make(0, 0);
        const ex = new EntityExistence(e, p);
        expect(ex).to.have.property("entity").that.is.instanceof(Entity);
    });

    it("has property of Point named point", function(){
        const e = new Entity();
        const p = Point.make(0, 0);
        const ex = new EntityExistence(e, p);
        expect(ex).to.have.property("point").that.is.instanceof(Point);
    });

    describe("constructor", function() {
        it("require Entity and Point", function() {
            const e = new Entity();
            const p = Point.make(0, 0);
            const ex = new EntityExistence(e, p);
            expect(ex).is.instanceof(EntityExistence);
        });
    });
});
