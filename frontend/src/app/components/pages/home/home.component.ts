import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarService } from 'src/app/services/cars.service';
import { Cars } from 'src/app/shared/models/Cars';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cars:Cars[] = [];

  constructor(private carService:CarService, activatedRoute:ActivatedRoute) {
    activatedRoute.params.subscribe((params) => {
      if(params.searchTerm)
        this.cars = this.carService.getAllCarsBySearchTerm(params.searchTerm);
      else
        this.cars = carService.getAll();
    })
  }

  ngOnInit(): void {
  }

}
