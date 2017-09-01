import { Entity } from "./entity";
import { Point } from "./point";
import { Vector } from "./vector";
export class EntityExistence {
    public point: Point;
    constructor(public readonly entity: Entity) {
        this.point = new Point(new Vector(0));
    }
}
