import { Distance } from "./distance";
import { Entity } from "./entity";
import { EntityExistence } from "./entityExistence";
import { Point } from "./point";
import { Size } from "./size";
export class World {
    public readonly entityExistence: EntityExistence[] = [];
    constructor(readonly size: Size) {
    }

    public addEntity(entity: Entity, point: Point) {
        const e = new EntityExistence(entity, point);
        this.entityExistence.push(e);
    }
}
