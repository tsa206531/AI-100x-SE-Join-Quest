class ChessService {
  constructor() {
    this.board = {};
  }
  setPiece(piece, position) {
    // 只處理 Red General
    this.board[`${position[0]},${position[1]}`] = piece;
  }
  movePiece(from, to) {
    const fromKey = `${from[0]},${from[1]}`;
    const toKey = `${to[0]},${to[1]}`;
    if (this.board[fromKey] === 'Red General') {
      // 紅將只能在 (row:1~3, col:4~6) 的宮內
      const [toRow, toCol] = to;
      if (toRow < 1 || toRow > 3 || toCol < 4 || toCol > 6) {
        return false;
      }
      // 檢查「將帥對面」規則
      // 找出黑將位置
      let blackGeneralPos = null;
      for (const key in this.board) {
        if (this.board[key] === 'Black General') {
          const [row, col] = key.split(',').map(Number);
          blackGeneralPos = [row, col];
          break;
        }
      }
      if (blackGeneralPos && to[1] === blackGeneralPos[1]) {
        // 檢查 to.row ~ blackGeneralPos.row 之間有無其他棋子
        const minRow = Math.min(to[0], blackGeneralPos[0]);
        const maxRow = Math.max(to[0], blackGeneralPos[0]);
        let hasBlock = false;
        for (let r = minRow + 1; r < maxRow; r++) {
          if (this.board[`${r},${to[1]}`]) {
            hasBlock = true;
            break;
          }
        }
        if (!hasBlock) {
          return false;
        }
      }
      // 允許移動一格
      if (
        (Math.abs(from[0] - to[0]) + Math.abs(from[1] - to[1]) === 1)
      ) {
        this.board[toKey] = this.board[fromKey];
        delete this.board[fromKey];
        return true;
      }
      return false;
    }
    if (this.board[fromKey] === 'Red Guard') {
      // 紅士只能在 (row:1~3, col:4~6) 的宮內斜向移動一格
      const [toRow, toCol] = to;
      if (toRow < 1 || toRow > 3 || toCol < 4 || toCol > 6) {
        return false;
      }
      // 檢查是否為斜向移動一格
      if (Math.abs(from[0] - to[0]) === 1 && Math.abs(from[1] - to[1]) === 1) {
        this.board[toKey] = this.board[fromKey];
        delete this.board[fromKey];
        return true;
      }
      return false;
    }
    return false;
  }
}

module.exports = { ChessService }; 