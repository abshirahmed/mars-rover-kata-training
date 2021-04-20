import MarsRover from './marsRover';

export abstract class Command {
    constructor(public marsRover = new MarsRover()) {
    }

    abstract execute(): void
}