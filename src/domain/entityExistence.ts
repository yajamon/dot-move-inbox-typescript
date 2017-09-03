import { Entity } from "./entity";
import { Point } from "./point";
import { Vector } from "./vector";
export class EntityExistence {
    constructor(public readonly entity: Entity, public point: Point) {
    }
}
