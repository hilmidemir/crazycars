import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CarService } from 'src/app/services/cars.service';
import { Cars } from 'src/app/shared/models/Cars';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cars:Cars[] = [];

  constructor(private carService: CarService, activatedRoute: ActivatedRoute) {

    let carsObservable: Observable<Cars[]>;

    activatedRoute.params.subscribe((params) => {
      if(params.searchTerm)
        carsObservable = this.carService.getAllCarsBySearchTerm(params.searchTerm);
      else if(params.tag)
        carsObservable = this.carService.getAllCarsByTag(params.tag);
      else
        carsObservable = carService.getAll();

        carsObservable.subscribe((serverCars) => {
          this.cars = serverCars;
        })
    });
  }

  ngOnInit(): void {
  }

}
