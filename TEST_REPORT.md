# 測試報告（Test Report）

## 測試目標
驗證訂單優惠模組（OrderService）能正確處理以下促銷規則，並確保所有 BDD 驗收情境皆可通過：
- Double Eleven bulk discount（雙十一滿件折扣）
- Threshold discount（滿額折扣）
- Buy-one-get-one for cosmetics（化妝品買一送一，每單一商品最多送1件）
- 多重促銷疊加

## 測試涵蓋情境
### order.feature
- 單一商品無優惠
- 滿額折扣
- 化妝品買一送一（多商品/同商品/混合類別）
- 滿額折扣與買一送一疊加

### double11.feature
- 雙十一 bulk discount（襪子滿10件折200元）
- 不同數量襪子 bulk discount 疊加
- 多商品 bulk discount 不影響
- 雙十一活動未啟動時無折扣

## 測試執行方式
1. 安裝依賴：
   ```sh
   npm install
   ```
2. 執行所有測試並產生報告：
   ```sh
   npx cucumber-js --require src/steps order.feature double11.feature --format html:cucumber-report.html
   ```
3. 用瀏覽器開啟 `cucumber-report.html` 查看圖形化測試結果。

## 測試結果摘要
- **全部通過**：order.feature 與 double11.feature 共 10 個 scenario，43 個步驟，全部通過。
- **促銷疊加驗證**：三種促銷可共存，且優惠計算順序正確。
- **邊界情境**：如 bulk discount 疊加、買一送一僅送1件、活動未啟動時無優惠等皆有覆蓋。

## 測試結論
- OrderService 促銷模組已通過所有 BDD 驗收測試，邏輯正確、可維護、可擴充。
- 如需新增促銷規則或測試情境，請依 BDD 流程增量開發與驗證。 