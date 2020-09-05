const { terminationToJSON } = require('../termination');

describe('Test Termination', () => {

    it('Test that terminationToJSON parses a record correctly', () => {
        const record = {
            id: '0adfc785-afb5-4218-ac6e-32441a4577e4',
            zoom_id: '987653245345',
            terminate_time: new Date('2020-09-05T08:54:11.843Z'),
        };
        const parsed = terminationToJSON(record);
        expect(parsed.id).toEqual(record.id);
        expect(parsed.zoomId).toEqual(record.zoom_id);
        expect(new Date(parsed.terminateTime)).toEqual(record.terminate_time);
    });
});