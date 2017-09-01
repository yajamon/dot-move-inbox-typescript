import { expect } from "chai";
import { Point } from "../src/domain/point";

describe("Point", function(){
    it("has property of Vector named x", function(){
        const point = new Point();
        expect(point).to.have.property("x").that.is.instanceof(Vector);
    });
});
