const assert = require('assert');
const totalPoints = require('./calculateTotalPoints');

describe('Total Points', () => {
  
  describe('Hill flying', () => {
    it('should return a number when add points > 0.', () => {
      const actual = totalPoints(227.5, 'flying', 200, [18, 18.5, 17.5, 18.5, 18.5], 15.1, 2);
      
      const expected = 225.1;

      assert.equal(actual, expected);
    });
    
    it('should return a number when add points < 0.', () => {
      const actual = totalPoints(230, 'flying', 200, [19, 18.5, 18.5, 19, 17.5], -8, -1);
      
      const expected = 203;

      assert.equal(actual, expected);
    });
  });
  
  describe('Hill standard', () => {
    it('should return a number when add points > 0.', () => {
      const actual = totalPoints(92, 'standard', 98, [17, 18.5, 18, 17.5, 17.5], 3, 5);
      
      const expected = 109;
      
      assert.equal(actual, expected);
    });
    
    it('should return a number when add points < 0.', () => {
      const actual = totalPoints(120, 'standard', 98, [19, 19, 19, 19.5, 20], -13.5, -7);
      
      const expected = 141;

      assert.equal(actual, expected);
    });
  });
  
  describe('Hill large', () => {
    it('should return a number when add points > 0.', () => {
      const actual = totalPoints(105.5, 'large', 120, [17, 18, 18, 17.5, 17.5], 12.8, 2);
      
      const expected = 101.7;

      assert.equal(actual, expected);
    });
    
    it('should return a number when add points < 0.', () => {
      const actual = totalPoints(135, 'large', 120, [20, 19, 18.5, 19, 20], -8, -3);
      
      const expected = 134;

      assert.equal(actual, expected);
    });
  });
});