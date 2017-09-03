import { Distance } from "./distance";
import { EntityExistence } from "./entityExistence";
import { Size } from "./size";
export class World {
    public readonly entityExistence: EntityExistence[] = [];
    constructor(readonly size: Size) {
    }
}
