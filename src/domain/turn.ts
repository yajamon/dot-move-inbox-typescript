export class Turn {
    public readonly value: number;
    constructor(value: number) {
        this.value = Math.floor(value);
    }

    public next(): Turn {
        return new Turn(this.value + 1);
    }

    public equals(t: Turn): boolean {
        return t.value === this.value;
    }
}
