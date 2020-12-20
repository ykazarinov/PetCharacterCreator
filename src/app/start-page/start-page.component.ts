import {Component, Input, OnInit, Output} from '@angular/core';
import {GlobalSeviceService} from '../services/global-sevice.service';



@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss']
})


export class StartPageComponent implements OnInit {

  constructor(public globalService: GlobalSeviceService) {
    globalService.headerisVisible = false;
  }

  ngOnInit() {

  }



}
