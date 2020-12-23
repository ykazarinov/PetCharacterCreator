import { Component, Input, OnInit } from '@angular/core';
import {GlobalSeviceService, Page} from '../services/global-sevice.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-animals-page',
  templateUrl: './animals-page.component.html',
  styleUrls: ['./animals-page.component.scss']
})
export class AnimalsPageComponent implements OnInit {

  @Input() loading: boolean;
  page_url: string;
  page: Page;

  constructor(
              public globalService: GlobalSeviceService) {
    globalService.headerisVisible = true;

  }

  ngOnInit(){

    // обнуляем текущего животного
    this.globalService.myAnimal.animal_id = 0;
    this.globalService.myAnimal.gender_id = 0;
    this.globalService.myAnimal.my_parts = [];

   

  }

  transferAnimalId(a){
    this.globalService.myAnimal.animal_id = a;
  }

}
