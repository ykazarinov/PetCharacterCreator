import { Component, Input, OnInit } from '@angular/core';
import {Animal, GlobalSeviceService, Page} from '../services/global-sevice.service';
import {HttpClient} from '@angular/common/http';
import { ActivatedRoute, NavigationEnd, NavigationStart, Params, Router } from '@angular/router';



@Component({
  selector: 'app-animals-page',
  templateUrl: './animals-page.component.html',
  styleUrls: ['./animals-page.component.scss']
})
export class AnimalsPageComponent implements OnInit {

  @Input() loading: boolean;
  page_url: string;
  page: Page;

  constructor(private http: HttpClient,
              public globalService: GlobalSeviceService,
              private route: ActivatedRoute,
              private router: Router) {
    globalService.headerisVisible = true;

  }

  ngOnInit(){

    // обнуляем текущего животного
    this.globalService.myAnimal.animal_id = 0;
    this.globalService.myAnimal.gender_id = 0;
    this.globalService.myAnimal.my_parts = [];

    // забираем название страницы
    this.page_url =  this.router.url.slice(1);
    this.page = this.globalService.getByUrl(this.page_url);   

  }

  transferAnimalId(a){
    this.globalService.myAnimal.animal_id = a;
  }

}
