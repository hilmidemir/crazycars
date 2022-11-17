import { Cars } from "./Cars";

export class CartItem {
  constructor(public car: Cars) {  // 1. way of public constructor
    //this.car = car; **this line 2. way
  }                                  //{equals the constructor function}
  //car!: Cars;       **and this line
  quantity: number = 1;
  price: number = this.car.price;
}
