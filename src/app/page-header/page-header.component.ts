import {Component, Input, OnInit} from '@angular/core';
import {GlobalSeviceService} from '../services/global-sevice.service';
// import {ActivatedRoute, Params} from '@angular/router';


@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit {



  constructor(public globalService: GlobalSeviceService) { }

  ngOnInit(): void {
    // this.route.params.subscribe((params: Params) => {
    //   console.log(params);
    // });


  }

}
