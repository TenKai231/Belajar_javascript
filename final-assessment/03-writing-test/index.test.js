import test from 'node:test';
import assert from 'node:assert';

// Sesuaikan cara impor dengan module system yang digunakan di index.js
import { sum } from './index.js';

test('pengujian fungsi sum', (t) => {
  assert.strictEqual(sum(1, 2), 3, 'penjumlahan 1 dan 2 harus menghasilkan 3');
  assert.strictEqual(sum(-1, 1), 0, 'penjumlahan -1 dan 1 harus menghasilkan 0');
  assert.strictEqual(sum(0, 0), 0, 'penjumlahan 0 dan 0 harus menghasilkan 0');
  assert.strictEqual(sum(5, 5), 10, 'penjumlahan 5 dan 5 harus menghasilkan 10');
});