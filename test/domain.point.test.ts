import { expect } from "chai";
import { Point } from "../src/domain/point";
import { Vector } from "../src/domain/vector";

describe("Point", function(){
    it("has property of Vector named x", function(){
        const point = new Point();
        expect(point).to.have.property("x").that.is.instanceof(Vector);
    });
    it("has property of Vector named y", function(){
        const point = new Point();
        expect(point).to.have.property("y").that.is.instanceof(Vector);
    });

    describe(".make()", function() {
        it("make Point with number", function() {
            const x = 1;
            const y = 2;
            const point = Point.make(x, y);
            expect(point).instanceOf(Point);
        });
    });
});
