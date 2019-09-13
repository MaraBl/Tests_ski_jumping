const assert = require('assert');
const stylePoints = require('./calculateStylePoints');

describe('Style Points', () => {
    it('should return a number when notes are the same.', () => {
        const actual = stylePoints([18, 18, 18, 18, 18]);
        
        const expected = 54;

        assert.equal(actual, expected);
    });

    it('should return a number when two of notes are the same.', () => {
        const actual = stylePoints([16, 17, 16, 16.5, 18]);
        
        const expected = 49.5;

        assert.equal(actual, expected);
    });
    
    it('should return a number when notes are different.', () => {
        const actual = stylePoints([18, 17.5, 14, 16.5, 19]);
        
        const expected = 52;

        assert.equal(actual, expected);
    });
});

