import { Command } from '../command';

export class RotateLeft extends Command {

    execute(): void {
        this.marsRover.rotateLeft();
    }
}