import { describe, test, expect } from 'jest';
import '../../../index.js';

describe('ageInSeconds', () => {
  test("one-second-old", async function() {
    expect(index.ageInSeconds(1)).toBe('You are 31557600 seconds old');
  });
});
