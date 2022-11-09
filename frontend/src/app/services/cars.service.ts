import { Injectable } from '@angular/core';
import { sample } from 'rxjs';
import { sample_cars, sample_tags } from 'src/data';
import { Cars } from '../shared/models/Cars';
import { Tag } from '../shared/Tag';



@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor() { }

  getAll():Cars[] {
    return sample_cars;
  }

  getAllCarsBySearchTerm(searchTerm: string) {
    return this.getAll().filter(car => car.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }

  getAllTags():Tag[] {
    return sample_tags;
  }

  getAllCarsByTag(tag:string):Cars[] {
    return tag === "All"? /* if tag equal to "All" run the next code */
    this.getAll(): /* column(:) means otherwise just start second code  */
    this.getAll().filter(car => car.tags?.includes(tag));
  }

}
