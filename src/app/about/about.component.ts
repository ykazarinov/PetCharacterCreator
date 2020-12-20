import { Component, OnInit } from '@angular/core';
import { GlobalSeviceService } from '../services/global-sevice.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor( public globalService: GlobalSeviceService) { }

  ngOnInit(): void {
  }

}
