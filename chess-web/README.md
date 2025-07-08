# chess-web

## 專案簡介

chess-web 是一個以 BDD 驅動的中國象棋規則驗證與（預期）網頁遊戲專案。專案以 Cucumber-js 驗證所有棋子移動與勝負規則，並預留前端架構（Vite + Vue 3）。

## 技術棧
- JavaScript (CommonJS)
- BDD 測試：Cucumber-js
- 前端框架：Vite + Vue 3（預留）

## 目錄結構
```
chess-web/
├─ src/
│   └─ ChessService.js         # 棋盤與規則邏輯骨架
├─ features/
│   ├─ chess.feature           # 中國象棋規則 BDD 驗收規格
│   └─ step_definitions/
│       └─ chess.steps.cjs     # BDD 步驟定義
├─ cucumber-report.html        # 測試報告
├─ package.json                # 依賴與指令
└─ README.md                   # 本說明文件
```

## 架構規格
- 以 BDD 驅動開發，所有棋子移動、勝負規則皆以 Gherkin 語法明確描述。
- 每個棋子的合法/非法移動、特殊規則（如象不能過河、馬腳被擋、炮打隔山等）皆有對應 scenario。
- 測試覆蓋棋子移動、吃子、勝負判斷等多種情境。

## 測試規格摘要
- 將/帥（General）：僅能在九宮格內移動，不能面對面。
- 士/仕（Guard）：僅能斜走，不能離開九宮格。
- 象/相（Elephant）：只能走田字，不能過河，不能被擋。
- 馬（Horse）：走日字，馬腳不能被擋。
- 車（Rook）：直線移動，不能跳子。
- 炮（Cannon）：吃子需隔一子，否則如車移動。
- 兵/卒（Soldier/Pawn）：未過河只能直走，過河後可橫走，不能後退。
- 勝負規則：吃掉對方將/帥立即勝利，吃其他棋子遊戲繼續。

## 測試結果
- 測試報告請見 `cucumber-report.html`。
- feature file 覆蓋所有棋子與勝負規則。
- 報告內容顯示 scenario 與步驟皆有執行記錄。
- 若需詳細通過/失敗數量，請直接開啟報告檔案檢視。 