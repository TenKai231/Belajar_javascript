import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import sum from './index.js';

describe('sum', () => {
  // ── Happy path ──────────────────────────────────────────────────────────────

  it('should return the correct sum of two positive numbers', () => {
    assert.equal(sum(2, 3), 5);
  });

  it('should return the correct sum when both numbers are zero', () => {
    assert.equal(sum(0, 0), 0);
  });

  it('should return the correct sum when one argument is zero', () => {
    assert.equal(sum(0, 5), 5);
    assert.equal(sum(7, 0), 7);
  });

  it('should handle large numbers correctly', () => {
    assert.equal(sum(1000000, 2000000), 3000000);
  });

  it('should handle decimal numbers correctly', () => {
    assert.equal(sum(1.5, 2.5), 4);
  });

  // ── Guard: non-number arguments ─────────────────────────────────────────────

  it('should return 0 when the first argument is a string', () => {
    assert.equal(sum('2', 3), 0);
  });

  it('should return 0 when the second argument is a string', () => {
    assert.equal(sum(2, '3'), 0);
  });

  it('should return 0 when both arguments are strings', () => {
    assert.equal(sum('2', '3'), 0);
  });

  it('should return 0 when an argument is null', () => {
    assert.equal(sum(null, 3), 0);
    assert.equal(sum(2, null), 0);
  });

  it('should return 0 when an argument is undefined', () => {
    assert.equal(sum(undefined, 3), 0);
    assert.equal(sum(2, undefined), 0);
  });

  it('should return 0 when an argument is a boolean', () => {
    assert.equal(sum(true, 3), 0);
    assert.equal(sum(2, false), 0);
  });

  it('should return 0 when an argument is an array', () => {
    assert.equal(sum([], 3), 0);
  });

  it('should return 0 when an argument is an object', () => {
    assert.equal(sum({}, 3), 0);
  });

  it('should return 0 when both arguments are not numbers', () => {
    assert.equal(sum('a', 'b'), 0);
  });

  // ── Guard: negative numbers ─────────────────────────────────────────────────

  it('should return 0 when the first argument is negative', () => {
    assert.equal(sum(-1, 3), 0);
  });

  it('should return 0 when the second argument is negative', () => {
    assert.equal(sum(3, -1), 0);
  });

  it('should return 0 when both arguments are negative', () => {
    assert.equal(sum(-1, -5), 0);
  });
});
