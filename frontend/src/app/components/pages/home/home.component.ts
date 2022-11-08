import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/services/cars.service';
import { Cars } from 'src/app/shared/models/Cars';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cars:Cars[] = [];

  constructor(private carService:CarService) {
    this.cars = carService.getAll();
  }

  ngOnInit(): void {
  }

}
