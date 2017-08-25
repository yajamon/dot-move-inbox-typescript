export class Turn {
    readonly value:number;
    constructor(value: number) {
        this.value = Math.floor(value);
    }

    next():Turn {
        return new Turn(this.value + 1);
    }

    equals(t: Turn): boolean {
        return true;
    }
}
