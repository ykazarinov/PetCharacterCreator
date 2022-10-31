import { Route } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { GlobalSeviceService, Page } from '../services/global-sevice.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  page: Page;
  page_url: string;

  constructor( 
    public globalService: GlobalSeviceService,
    private route: ActivatedRoute,
    private router: Router) {

     
     }

  ngOnInit(){ 

  //   this.globalService.stream$.subscribe(
  //     y => { this.page = y;}
  //  );


  }

  ngDoCheck(){
    //  this.route.params.subscribe((params: Params) => {
    //   //  console.log('page.component');
    //   this.page = this.globalService.getByUrl(params.url); 
        
    // })

  
    this.page_url =  this.router.url.slice(1);
    this.page = this.globalService.getByUrl(this.page_url);
  

  }

  ngAfterViewChecked(){
    
  }

  ngAfterViewInit(){
  
  
                 
  }



}
