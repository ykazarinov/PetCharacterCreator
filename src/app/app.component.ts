import {Component, Output} from '@angular/core';
import {GlobalSeviceService} from './services/global-sevice.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public globalService: GlobalSeviceService) {
  }




}
