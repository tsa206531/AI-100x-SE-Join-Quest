# 訂單優惠模組 (Order Promotion Module)

## 專案簡介
本專案為純模組型的電商訂單優惠計算服務，採用 BDD (行為驅動開發) 流程，並以 Cucumber-js 驗證所有促銷規則。(從開始到完成約花2H)

## 技術棧
- 語言：JavaScript (ES Modules)
- BDD 測試框架：Cucumber-js (@cucumber/cucumber)
- 單元測試：Jest (可擴充)
- 專案根目錄：src/

## 專案結構

```
訂單優惠模組/
│
├─ ecommerce/                # 電商訂單優惠模組
│   ├─ order.feature         # 主驗收 feature
│   ├─ double11.feature      # 雙十一促銷 feature
│   └─ src/
│       ├─ OrderService.js   # 主要業務邏輯
│       ├─ steps/
│       │   ├─ order-steps.js      # order.feature 對應 step definitions
│       │   └─ double11-steps.js   # double11.feature 對應 step definitions
│       └─ support/
│           └─ world.js      # Cucumber World 設定
│
├─ chess-web/                # 預留：網頁象棋遊戲專案（目前為空）
│
├─ TEST_REPORT.md            # 測試報告
├─ cucumber-report.html      # 測試執行產生的 HTML 報告
├─ package.json              # 依賴與指令
├─ ...（其他說明、設計、prompt 檔案等）
```

- `ecommerce/` 內含所有電商訂單優惠模組的程式、測試、feature files。
- `chess-web/` 為未來網頁象棋遊戲專案預留，與電商模組完全分離。

## 安裝與執行
```sh
npm install
npx cucumber-js --require src/steps <feature file> --tags "not @ignore"
```

## BDD 流程
1. 先建立 walking skeleton，確保 Cucumber 能執行至少一個 scenario。
2. 嚴格一次只開發一個 scenario，其他 scenario 加 @ignore。
3. 步驟A：撰寫步驟定義但不實作邏輯，讓測試失敗於值。
4. 步驟B：實作邏輯，讓測試通過。
5. 步驟C：重構/clean code，並再次確認測試通過。

## 設計重點
- **OrderService**：所有優惠邏輯集中於此，易於擴充。
- **促銷規則**：以 double11 bulk discount 為例，每滿10件同商品折200元，僅限活動期間。
- **可擴充性**：可依需求新增更多促銷規則。

## 測試報告
- 已覆蓋 scenario：
  - 雙十一活動未啟動時無折扣
  - 其他 bulk discount 與促銷情境（見 feature file）
- 測試執行：
  - 100% scenario/step 通過（以目前已開發 scenario 為準）

## 如何擴充
- 新增促銷規則：於 OrderService 增加對應邏輯，並撰寫對應 feature/scenario。
- 新增測試：於 feature file 增加情境，並撰寫步驟定義。

---
如需更細緻的設計說明或測試報告，可再細分檔案（如 DESIGN.md、TEST_REPORT.md）。 

npm init -y
npm install @cucumber/cucumber --save-dev 