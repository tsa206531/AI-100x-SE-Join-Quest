import { setWorldConstructor } from '@cucumber/cucumber';

class CustomWorld {
  constructor() {
    this.orderItems = [];
    this.promotions = [];
    this.orderSummary = null;
  }
}

setWorldConstructor(CustomWorld); 