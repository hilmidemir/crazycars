import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, sample } from 'rxjs';
import { sample_cars, sample_tags } from 'src/data';
import { CARS_BY_ID_URL, CARS_BY_SEARCH_URL, CARS_TAGS_URL, CARS_URL } from '../shared/constants/urls';
import { Cars } from '../shared/models/Cars';
import { Tag } from '../shared/models/Tag';



@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http:HttpClient) { }

  getAll(): Observable <Cars[]> {
    return this.http.get<Cars[]>(CARS_URL);
  }

  getAllCarsBySearchTerm(searchTerm: string) {
    return this.http.get<Cars[]>(CARS_BY_SEARCH_URL + searchTerm);
  }

  getAllTags(): Observable <Tag[]> {
    return this.http.get<Tag[]>(CARS_TAGS_URL);
  }

  getAllCarsByTag(tag:string): Observable <Cars[]> {
    return tag === "All"? /* if tag equal to "All" run the next code */
    this.getAll() : /* column(:) means otherwise just start second code  */
    this.http.get<Cars[]>(CARS_TAGS_URL + tag);
  }

  getCarById(carId: string): Observable <Cars> {
    return this.http.get<Cars>(CARS_BY_ID_URL + carId);
  }
}
