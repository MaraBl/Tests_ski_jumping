const assert = require('assert');
const distancePoints = require('./calculateDistancePoints');

describe('distancePoints', () => {
    
    describe('Hill flying', () => {
        it('should return number when jump is just like K point', () => {
            const actual = distancePoints(200, 'flying', 200);
            
            const expected = '120';
            
            assert.equal(actual, expected);
        });
        
        it('should return a number when jump is shorter than K point', () => {
            const actual = distancePoints(173, 'flying', 200);
            
            const expected = '87.6';
    
            assert.equal(actual, expected);
        });
        
        it('should return a number when jump is longer than K point.', () => {
            const actual = distancePoints(239, 'flying', 200);
            
            const expected = 166.8;

            assert.equal(actual, expected);
        });
    });
    
    describe('Hill standard', () => {      
        it('should return a number when jump is just like K point.', () => {
            const actual = distancePoints(98, 'standard', 98);
            
            const expected = 60;

            assert.equal(actual, expected);
        });
        
        it('should return a number when jump is shorter than K point.', () => {
            const actual = distancePoints(75, 'standard', 98);
            
            const expected = 14;
            
            assert.equal(actual, expected);
        });
        
        it('should return a number when jump is longer than K point.', () => {
            const actual = distancePoints(109.5, 'standard', 98);
            
            const expected = 83;
            
            assert.equal(actual, expected);
        });
    });
    
    describe('Hill large', () => {
        it('should return a number when jump is equals than K point.', () => {
            const actual = distancePoints(120, 'large', 120);
            
            const expected = 60;
            
            assert.equal(actual, expected);
        });
        
        it('should return a number when jump is shorter than K point.', () => {
            const actual = distancePoints(115, 'large', 120);
            
            const expected = 51;

            assert.equal(actual, expected);
        });
        
        it('should return a number when jump is longer than K point.', () => {
            const actual = distancePoints(150, 'large', 120);
            
            const expected = 114;

            assert.equal(actual, expected);
        });
    });
});