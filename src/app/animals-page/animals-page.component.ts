import { Component, OnInit } from '@angular/core';
import {Animal, GlobalSeviceService} from '../services/global-sevice.service';
import {HttpClient} from '@angular/common/http';



@Component({
  selector: 'app-animals-page',
  templateUrl: './animals-page.component.html',
  styleUrls: ['./animals-page.component.scss']
})
export class AnimalsPageComponent implements OnInit {

  loading = false;
  all: any;

  constructor(private http: HttpClient,
              public globalService: GlobalSeviceService) {
    globalService.headerisVisible = true;
  }

  ngOnInit(){

    // обнуляем текущего животного
    this.globalService.myAnimal.animal_id = 0;
    this.globalService.myAnimal.gender_id = 0;
    this.globalService.myAnimal.my_parts = [];

    this.loading = true;
    this.http.get<Animal[]>(this.globalService.server_url + 'animals')
      .subscribe(response => {

        this.all = response;
        // this.animals = this.all.animals_genders['animals'];

        this.globalService.animals = this.all.animals_genders['animals'];
        this.globalService.genders = this.all.animals_genders['genders'];
        this.globalService.menu_items = this.all.animals_genders['menu'];
        this.globalService.pages = this.all.animals_genders['pages'];
        this.globalService.soc_networks = this.all.animals_genders['soc_networks'];
        console.log(this.all.animals_genders);
        // console.log(this.globalService.menu_items);
        this.loading = false;
      })
  }

  transferAnimalId(a){
    this.globalService.myAnimal.animal_id = a;


  }

}
