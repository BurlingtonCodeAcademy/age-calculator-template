import { index } from '../index.js';

describe('ageInSeconds', () => {
  test("one-second-old", async function() {
    expect(index.ageInSeconds(1)).toBe('You are 31557600 seconds old');
  });
});
