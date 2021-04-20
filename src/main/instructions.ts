import { Command } from './command';
import MarsRover from './marsRover';

export class RotateLeft implements Command {
    marsRover: MarsRover

    constructor(marsRover: MarsRover) {
        this.marsRover = marsRover;
    }

    execute(): void {
        this.marsRover.rotateLeft();
    }
}

export class RotateRight implements Command {
    marsRover: MarsRover

    constructor(marsRover: MarsRover) {
        this.marsRover = marsRover;
    }

    execute(): void {
        this.marsRover.rotateRight();
    }
}

export class Move implements Command {
    marsRover: MarsRover

    constructor(marsRover: MarsRover) {
        this.marsRover = marsRover;
    }

    execute(): void {
        //move forward
        this.marsRover.moveForward();
    }
}