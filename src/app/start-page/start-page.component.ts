import { HttpClient } from '@angular/common/http';
import {Component, Input, OnInit, Output} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Animal, GlobalSeviceService, Page} from '../services/global-sevice.service';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss']
})


export class StartPageComponent implements OnInit {

  loading = false;
  all: any;

  constructor(private http: HttpClient,
    public globalService: GlobalSeviceService,
    private route: ActivatedRoute,
    private router: Router) {
    globalService.headerisVisible = false;
  }

  ngOnInit() {
    this.loading = true;
    this.http.get<Animal[]>(this.globalService.server_url + 'animals')
      .subscribe(response => {
        this.all = response;
        this.globalService.animals = this.all.animals_genders['animals'];
        this.globalService.genders = this.all.animals_genders['genders'];
       


        this.globalService.soc_networks = this.all.animals_genders['soc_networks'];
        this.globalService.languages = this.all.animals_genders['languages'];

       
        //====================
       
        for(let i in this.globalService.languages){
          if(this.globalService.languages[i].locale === 'en'){
            this.globalService.languages[i].current = true;
            this.globalService.languages[i].menu_items = this.all.animals_genders['menu'];
            this.globalService.languages[i].pages = this.all.animals_genders['pages'];
            this.globalService.languages[i].wins = this.all.animals_genders['wins'];
          }
        }
             
        console.log(this.globalService.languages);
        this.loading = false;
    })
  }
}