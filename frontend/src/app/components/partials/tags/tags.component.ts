import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/services/cars.service';
import { Tag } from 'src/app/shared/models/Tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

  tags?: Tag[];

  constructor(carService: CarService) {
    carService.getAllTags().subscribe(serverTags => {
      this.tags = serverTags;
    });
  }

  ngOnInit(): void {
  }

}
