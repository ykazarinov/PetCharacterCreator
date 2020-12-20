import { Component, OnInit } from '@angular/core';
import {Category, GlobalSeviceService} from '../services/global-sevice.service';
// import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-gender-page',
  templateUrl: './gender-page.component.html', 
  styleUrls: ['./gender-page.component.scss']
})
export class GenderPageComponent implements OnInit {


  
  

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
