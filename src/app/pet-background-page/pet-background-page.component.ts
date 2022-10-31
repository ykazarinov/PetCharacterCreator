import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalSeviceService } from '../services/global-sevice.service';

@Component({
  selector: 'app-pet-background-page',
  templateUrl: './pet-background-page.component.html',
  styleUrls: ['./pet-background-page.component.scss']
})
export class PetBackgroundPageComponent implements OnInit {
  loading = false;
  petbgs_resp: any;

  constructor(
    public globalService: GlobalSeviceService,
    private router: Router) { }

    public page_url: any;
    public currentPageButton: any;
     title = '';

  ngOnInit(): void {
    this.getPetBackgrounds();

    this.globalService.myAnimal.choosed_bg_url = '';
  }

  ngDoCheck(){
    this.page_url =  this.router.url.slice(1);
    this.currentPageButton = this.globalService.nextPageBtnText(this.page_url);
  }

  getPetBackgrounds(){
    this.loading = true;
   
    this.globalService.loadPetBackgrounds()
    .subscribe(response => { 
        
      this.petbgs_resp = response; 
      this.globalService.petBackgrounds = this.petbgs_resp.petBackgrounds['petBgs'];

      console.log(this.globalService.petBackgrounds);
       

        this.loading = false;
      });
    
    }

}
