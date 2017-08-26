import { expect } from "chai";
import { Turn } from "../src/domain/turn";

describe("Turn", function(){

    describe("#equals()", function() {
        it("is returns true when compared by Turn object whose same value", function(){
            const turn = new Turn(1);
            expect(turn.equals(new Turn(1))).to.equal(true);
        });
        it("is returns false when compared by Turn object whose not same value", function(){
            const turn = new Turn(1);
            expect(turn.equals(new Turn(10))).to.equal(false);
        });
    });

    describe("#next()", function(){
        it("is returns a Turn object whose value is one greater than the current value", function(){
            const current = new Turn(0);
            const next = current.next();
            expect(next.equals(new Turn(1))).to.equal(true);
        });
    });
});
