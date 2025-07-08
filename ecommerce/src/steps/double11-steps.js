import { Given, When, Then } from '@cucumber/cucumber';
import assert from 'assert';
import { OrderService } from '../OrderService.js';

Given('the Double Eleven promotion is active', function() {
  this.promotions = ['double11'];
});

Given('雙十一優惠活動未啟動', function() {
  this.promotions = [];
});

Given('商品襪子的單價為 {int} 元', function(price) {
  this.unitPrice = price;
});

When('Double Eleven: a customer places an order with:', function(dataTable) {
  this.orderItems = dataTable.hashes();
  const result = OrderService.checkout(this.orderItems, this.promotions);
  this.orderSummary = result.summary;
  this.receivedItems = result.receivedItems;
});

When('顧客購買 {int} 件襪子', function(qty) {
  this.orderItems = [{ productName: '襪子', quantity: String(qty), unitPrice: this.unitPrice || 100 }];
  const result = OrderService.checkout(this.orderItems, this.promotions);
  this.orderSummary = result.summary;
  this.discount = (qty * (this.unitPrice || 100)) - this.orderSummary.totalAmount;
});

Then('Double Eleven: the order summary should be:', function(dataTable) {
  const expectedSummary = dataTable.hashes()[0];
  assert.strictEqual(this.orderSummary.totalAmount, parseInt(expectedSummary.totalAmount, 10));
});

Then('Double Eleven: the customer should receive:', function(dataTable) {
  const expectedItems = dataTable.hashes();
  assert.deepStrictEqual(this.receivedItems, expectedItems);
});

Then('訂單總價應為 {int} 元', function(total) {
  if (this.orderSummary.totalAmount !== total) {
    throw new Error(`總價錯誤: 實際為${this.orderSummary.totalAmount}, 應為${total}`);
  }
});

Then('不應有任何折扣', function() {
  if (this.discount !== 0) {
    throw new Error(`有不應有的折扣: ${this.discount}`);
  }
}); 