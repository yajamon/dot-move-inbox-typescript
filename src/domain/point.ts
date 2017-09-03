import { Vector } from "./vector";
export class Point {
    public static make(x: number, y: number) {
        return new Point(
            new Vector(x),
            new Vector(y),
        );
    }

    constructor(
        readonly x: Vector = new Vector(),
        readonly y: Vector = new Vector(),
    ) {
    }

}
