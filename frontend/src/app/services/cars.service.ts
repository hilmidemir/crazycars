import { Injectable } from '@angular/core';
import { sample } from 'rxjs';
import { sample_cars } from 'src/data';
import { Cars } from '../shared/models/Cars';



@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor() { }

  getAll():Cars[] {
    return sample_cars;
  }
}