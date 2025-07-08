import { Given, When, Then } from '@cucumber/cucumber';
import assert from 'assert';
import { OrderService } from '../OrderService.js';

// 暫時只實現第一個scenario的steps來建立walking skeleton
Given('no promotions are applied', function() {
  this.promotions = [];
});

Given('the threshold discount promotion is configured:', function(dataTable) {
  // 只支援一組 threshold/discount
  const config = dataTable.hashes()[0];
  this.promotions = this.promotions || [];
  this.promotions.push({
    type: 'threshold',
    threshold: parseInt(config.threshold, 10),
    discount: parseInt(config.discount, 10)
  });
});

Given('the buy one get one promotion for cosmetics is active', function() {
  this.promotions = this.promotions || [];
  this.promotions.push({ type: 'bogo-cosmetics' });
});

When('a customer places an order with:', function(dataTable) {
  this.orderItems = dataTable.hashes();
  // 呼叫OrderService
  const result = OrderService.checkout(this.orderItems, this.promotions);
  this.orderSummary = result.summary;
  this.receivedItems = result.receivedItems;
});

Then('the order summary should be:', function(dataTable) {
  const expectedSummary = dataTable.hashes()[0];
  assert.strictEqual(this.orderSummary.totalAmount, parseInt(expectedSummary.totalAmount));
});

Then('the customer should receive:', function(dataTable) {
  const expectedItems = dataTable.hashes();
  assert.deepStrictEqual(this.receivedItems, expectedItems);
}); 