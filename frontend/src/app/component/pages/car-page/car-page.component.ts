import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarService } from 'src/app/services/cars.service';
import { Cars } from 'src/app/shared/models/Cars';

@Component({
  selector: 'app-car-page',
  templateUrl: './car-page.component.html',
  styleUrls: ['./car-page.component.css']
})
export class CarPageComponent implements OnInit {

  car!: Cars;

  constructor(activatedRoute: ActivatedRoute, carService: CarService) {
    activatedRoute.params.subscribe((params) => {
      if(params.id)
        this.car = carService.getCarById(params.id);
    })
  }

  ngOnInit(): void {
  }

}
