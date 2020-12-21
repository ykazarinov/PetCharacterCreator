import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { GlobalSeviceService, Page } from '../services/global-sevice.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  page: Page;

  constructor( 
    public globalService: GlobalSeviceService,
    private route: ActivatedRoute) { }

  ngOnInit(): void { 
    this.route.params.subscribe((params: Params) => {
      console.log(params);
       this.page = this.globalService.getByUrl(params.url);
      console.log(this.page);
    })
  }

}
