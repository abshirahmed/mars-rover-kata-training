import { Command } from '../command';

export class MoveForward extends Command {

    execute(): void {
        this.marsRover.moveForward();
    }
}