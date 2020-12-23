import { Component, OnInit } from '@angular/core';
import {GlobalSeviceService, Page} from '../services/global-sevice.service';


@Component({
  selector: 'app-gender-page',
  templateUrl: './gender-page.component.html', 
  styleUrls: ['./gender-page.component.scss']
})
export class GenderPageComponent implements OnInit {


  page_url: string;
  page: Page;
  

  constructor(
    
    public globalService: GlobalSeviceService) {
    globalService.headerisVisible = true;
  }

  ngOnInit(): void {

  }


  transferGenderId(b){
    this.globalService.myAnimal.gender_id = b;
  }


}
