import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { GlobalSeviceService, Page } from '../services/global-sevice.service';

@Component({
  selector: 'app-heder-title',
  templateUrl: './heder-title.component.html',
  styleUrls: ['./heder-title.component.scss']
})
export class HederTitleComponent implements OnInit {

  page: Page;
  page_url: string;

  constructor( 
    public globalService: GlobalSeviceService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

        // забираем название страницы
        this.page_url =  this.router.url.slice(1);
        this.page = this.globalService.getByUrl(this.page_url); 

  }

}
