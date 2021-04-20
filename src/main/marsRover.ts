import MarsPlateau from './marsPlateau';
import { Move, RotateLeft, RotateRight } from './instructions';

export default class MarsRover {
    constructor(private orientation = 'N', private coordinates = {
        x: 0,
        y: 0
    }, private marsPlateau = new MarsPlateau()) {
    }


    rotateLeft() {
        switch (this.orientation) {
            case 'N':
                this.orientation = 'W';
                break;
            case 'W':
                this.orientation = 'S';
                break;
            case 'S':
                this.orientation = 'E';
                break;
            case 'E':
                this.orientation = 'N';
                break;
            default:
                break;
        }

        return this;
    }

    rotateRight() {
        switch (this.orientation) {
            case 'N':
                this.orientation = 'E';
                break;
            case 'E':
                this.orientation = 'S';
                break;
            case 'S':
                this.orientation = 'W';
                break;
            case 'W':
                this.orientation = 'N';
                break;
            default:
                break;
        }

        return this;
    }

    executeCommands(instructions: string) {

        const commands = this.getCommands(instructions);
        commands.forEach(command => command.execute());

        return `${this.coordinates.x}:${this.coordinates.y}:${this.orientation}`;
    }

    private getCommands(instructions: string) {
        return instructions.split('')
            .map(instruction => {
                switch (instruction) {
                    case 'L':
                        return new RotateLeft(this);
                    case 'R':
                        return new RotateRight(this);
                    case 'M':
                        return new Move(this);
                    default:
                        throw new Error('Unknown Command')
                }
            });

    }

    moveForward() {
        if (this.orientation === 'N') {
            if (this.coordinates.y === this.marsPlateau.maxHeight - 1) {
                this.coordinates.y = 0;
            } else {
                this.coordinates.y++;
            }
        }

        if (this.orientation === 'E') {
            if (this.coordinates.x === this.marsPlateau.maxWidth - 1) {
                this.coordinates.x = 0;
            } else {
                this.coordinates.x++;
            }
        }
        if (this.orientation === 'S') {
            if (this.coordinates.y === 0) {
                this.coordinates.y = this.marsPlateau.maxHeight - 1;
            } else {
                this.coordinates.y--;
            }
        }

        if (this.orientation === 'W') {
            if (this.coordinates.x === 0) {
                this.coordinates.x = this.marsPlateau.maxWidth - 1;
            } else {
                this.coordinates.x--;
            }
        }
    }
}