import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarService } from 'src/app/services/cars.service';
import { CartService } from 'src/app/services/cart.service';
import { Cars } from 'src/app/shared/models/Cars';

@Component({
  selector: 'app-car-page',
  templateUrl: './car-page.component.html',
  styleUrls: ['./car-page.component.css']
})
export class CarPageComponent implements OnInit {

  car!: Cars;

  constructor(activatedRoute: ActivatedRoute, carService: CarService,
      private cartService: CartService, private router: Router) {
    activatedRoute.params.subscribe((params) => {
      if(params.id)
        this.car = carService.getCarById(params.id);
    })
  }

  ngOnInit(): void {
    // ****
  }

  addToCart() {
    this.cartService.addToCart(this.car);
    this.router.navigateByUrl('/cart-page');
  }

}
