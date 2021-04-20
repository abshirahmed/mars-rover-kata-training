import { Command } from '../command';

export class RotateRight extends Command {

    execute(): void {
        this.marsRover.rotateRight();
    }
}