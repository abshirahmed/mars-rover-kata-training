import MarsRover from '../main/marsRover';

describe('Mars Rover', () => {
    it.each`instructions | expectedOrientation 
            ${'L'}       | ${'0:0:W'}
            ${'LL'}      | ${'0:0:S'}
            ${'LLL'}     | ${'0:0:E'}
            ${'LLLL'}    | ${'0:0:N'}
            ${'R'}       | ${'0:0:E'}
            ${'RR'}      | ${'0:0:S'}
            ${'RRR'}     | ${'0:0:W'}
            ${'RRRR'}    | ${'0:0:N'}
            ${'LRLRLRR'} | ${'0:0:E'}
    `('should be in position $expectedOrientation when given $instructions',
        ({instructions, expectedOrientation}) => {
            const marsRover = new MarsRover();

            expect(marsRover.executeCommands(instructions)).toBe(expectedOrientation);
        });

    it('should be in position 0:1:N when given instruction M', () => {
        const marsRover = new MarsRover();

        expect(marsRover.executeCommands('M')).toBe('0:1:N');
    })

    it('should be in position 1:0:N when given instruction RM', () => {
        const marsRover = new MarsRover();

        expect(marsRover.executeCommands('RM')).toBe('1:0:E');
    })

    it('should be in position 2:1:E when given instruction MRMM', () => {
        const marsRover = new MarsRover();

        expect(marsRover.executeCommands('MRMM')).toBe('2:1:E');
    })

    it('should be in position 0:0:N when given instruction MMMMMMMMMM', () => {
        const marsRover = new MarsRover();

        expect(marsRover.executeCommands('MMMMMMMMMM')).toBe('0:0:N');
    })

    it('should be in position 0:0:E when given instruction RMMMMMMMMMM', () => {
        const marsRover = new MarsRover();

        expect(marsRover.executeCommands('RMMMMMMMMMM')).toBe('0:0:E');
    })

    it('should be in position 0:9:S when given instruction RRM', () => {
        const marsRover = new MarsRover();

        expect(marsRover.executeCommands('RRM')).toBe('0:9:S');
    })

    it('should be in position 9:0:W when given instruction LM', () => {
        const marsRover = new MarsRover();

        expect(marsRover.executeCommands('LM')).toBe('9:0:W');
    })
})