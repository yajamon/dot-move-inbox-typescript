import { expect } from "chai"
import { Turn } from "../../src/domain/turn"


describe("Turn", function(){
    describe("#next()", function(){
        it("is returns a Turn object whose value is one greater than the current value", function(){
            const current = new Turn(0);
            const next = current.next();
            next.equals(new Turn(1));
        });
    });
});
