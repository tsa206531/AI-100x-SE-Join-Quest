const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');
const { ChessService } = require('../../src/ChessService');

// 第一個場景：Red moves the General within the palace (Legal)
Given('the board is empty except for a Red General at (1, 5)', function () {
  this.chess = new ChessService();
  this.chess.setPiece('Red General', [1, 5]);
});

When('Red moves the General from (1, 5) to (1, 4)', function () {
  this.result = this.chess.movePiece([1, 5], [1, 4]);
});

Then('the move is legal', function () {
  assert.strictEqual(this.result, true);
});

// 第二個場景：Red moves the General outside the palace (Illegal)
Given('the board is empty except for a Red General at (1, 6)', function () {
  this.chess = new ChessService();
  this.chess.setPiece('Red General', [1, 6]);
});

When('Red moves the General from (1, 6) to (1, 7)', function () {
  // 先 stub 回傳 true，讓 then 失敗
  this.result = true;
});

Then('the move is illegal', function () {
  // 期望 this.result 為 false，這裡會失敗
  assert.strictEqual(this.result, false);
});

// 第三個場景：Generals face each other on the same file (Illegal)
Given('the board has:', function (dataTable) {
  this.chess = new ChessService();
  // 只處理本 scenario 的資料
  const rows = dataTable.hashes();
  for (const row of rows) {
    const piece = row['Piece'];
    const pos = row['Position'].replace(/[()]/g, '').split(',').map(Number);
    this.chess.setPiece(piece, pos);
  }
});

When('Red moves the General from (2, 4) to (2, 5)', function () {
  // 先 stub 回傳 true，讓 then 失敗
  this.result = true;
});

// 第四個場景：Red moves the Guard diagonally within the palace (Legal)
Given(/^the board is empty except for a (.+) at \((\d+), (\d+)\)$/, function (piece, row, col) {
  this.chess = new ChessService();
  this.chess.setPiece(piece, [parseInt(row), parseInt(col)]);
});

When('Red moves the Guard from \({int}, {int}\)\ to \({int}, {int}\)', function (fromRow, fromCol, toRow, toCol) {
  this.result = this.chess.movePiece([fromRow, fromCol], [toRow, toCol]);
});

Given('the board is empty except for a Red Guard at (2, 5)', function () {
  return 'pending';
});

When('Red moves the Guard from (2, 5) to (2, 6)', function () {
  return 'pending';
});

Given('the board is empty except for a Red Rook at (4, 1)', function () {
  return 'pending';
});

When('Red moves the Rook from (4, 1) to (4, 9)', function () {
  return 'pending';
});

When('Red moves the Rook from (4, 1) to (4, 9)', function () {
  return 'pending';
});

Given('the board is empty except for a Red Horse at (3, 3)', function () {
  return 'pending';
});

When('Red moves the Horse from (3, 3) to (5, 4)', function () {
  return 'pending';
});

When('Red moves the Horse from (3, 3) to (5, 4)', function () {
  return 'pending';
});

Given('the board is empty except for a Red Cannon at (6, 2)', function () {
  return 'pending';
});

When('Red moves the Cannon from (6, 2) to (6, 8)', function () {
  return 'pending';
});

When('Red moves the Cannon from (6, 2) to (6, 8)', function () {
  return 'pending';
});

When('Red moves the Cannon from (6, 2) to (6, 8)', function () {
  return 'pending';
});

When('Red moves the Cannon from (6, 2) to (6, 8)', function () {
  return 'pending';
});

Given('the board is empty except for a Red Elephant at (3, 3)', function () {
  return 'pending';
});

When('Red moves the Elephant from (3, 3) to (5, 5)', function () {
  return 'pending';
});

Given('the board is empty except for a Red Elephant at (5, 3)', function () {
  return 'pending';
});

When('Red moves the Elephant from (5, 3) to (7, 5)', function () {
  return 'pending';
});

When('Red moves the Elephant from (3, 3) to (5, 5)', function () {
  return 'pending';
});

Given('the board is empty except for a Red Soldier at (3, 5)', function () {
  return 'pending';
});

When('Red moves the Soldier from (3, 5) to (4, 5)', function () {
  return 'pending';
});

When('Red moves the Soldier from (3, 5) to (3, 4)', function () {
  return 'pending';
});

Given('the board is empty except for a Red Soldier at (6, 5)', function () {
  return 'pending';
});

When('Red moves the Soldier from (6, 5) to (6, 4)', function () {
  return 'pending';
});

When('Red moves the Soldier from (6, 5) to (5, 5)', function () {
  return 'pending';
});

When('Red moves the Rook from (5, 5) to (5, 8)', function () {
  return 'pending';
});

Then('Red wins immediately', function () {
  return 'pending';
});

When('Red moves the Rook from (5, 5) to (5, 8)', function () {
  return 'pending';
});

Then('the game is not over just from that capture', function () {
  return 'pending';
});