import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Cars } from '../shared/models/Cars';
import { Cart } from '../shared/models/Cart';
import { CartItem } from '../shared/models/CartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Cart = this.getCartFromLocalStorage();
  private cartSubject: BehaviorSubject<Cart> = new BehaviorSubject(this.cart)
  constructor() { }

  addToCart(car: Cars): void {
    let cartItem = this.cart.items.find(item => item.car.id === car.id);
    if(cartItem)
      return;

    this.cart.items.push(new CartItem(car));
    this.setCartToLocalStorage();
  }

  removeFromCart(carId: string): void {
    this.cart.items = this.cart.items
      .filter(item => item.car.id != carId);

    this.setCartToLocalStorage();
  }

  changeQuantity(carId: string, quantity: number) {
    let CartItem = this.cart.items.find(item => item.car.id === carId);

    if(!CartItem)
      return;

    CartItem.quantity = quantity;
    CartItem.price = quantity * CartItem.car.price;
    this.setCartToLocalStorage();
  }

  clearCart() {
    this.cart = new Cart();
    this.setCartToLocalStorage();
  }

  getCartObservable(): Observable<Cart> {
    return this.cartSubject.asObservable();
  }

  private setCartToLocalStorage(): void {
    this.cart.totalPrice = this.cart.items
      .reduce((prevSum, CurremtItem) => prevSum + CurremtItem.price, 0);
    this.cart.totalCount = this.cart.items
      .reduce((prevSum, CurremtItem) => prevSum + CurremtItem.quantity, 0)

    const cartJson = JSON.stringify(this.cart);
    localStorage.setItem('Cart', cartJson);
    this.cartSubject.next(this.cart);
  }

  private getCartFromLocalStorage(): Cart{
    const cartJson = localStorage.getItem('Cart');
    return cartJson? JSON.parse(cartJson): new Cart();
  }
}
