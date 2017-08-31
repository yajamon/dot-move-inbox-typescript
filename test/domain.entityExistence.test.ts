import { expect } from "chai";
import { Entity } from "../src/domain/entity";
import { EntityExistence } from "../src/domain/entityExistence";

describe("EntityExistence", function(){

    it("has property of Entity named entity", function(){
        const e  = new Entity();
        const ex = new EntityExistence(e);
        expect(ex).to.have.property("entity").that.is.instanceof(Entity);
    });

    it("has property of Point named point", function(){
        const e  = new Entity();
        const ex = new EntityExistence(e);
        expect(ex).to.have.property("point").that.is.instanceof(Point);
    });
});
