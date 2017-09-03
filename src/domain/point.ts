import { Vector } from "./vector";
export class Point {
    constructor(
        readonly x: Vector = new Vector(),
        readonly y: Vector = new Vector(),
    ) {
    }
}
