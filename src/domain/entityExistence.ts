import { Entity } from "./entity";
import { Point } from "./point";
export class EntityExistence {
    public point: Point;
    constructor(public readonly entity: Entity) {
        this.point = new Point();
    }
}
