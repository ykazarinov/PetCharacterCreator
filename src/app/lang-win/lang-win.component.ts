import { Component, OnInit } from '@angular/core';
import { GlobalSeviceService } from '../services/global-sevice.service';

@Component({
  selector: 'app-lang-win',
  templateUrl: './lang-win.component.html',
  styleUrls: ['./lang-win.component.scss']
})
export class LangWinComponent implements OnInit {

  constructor(public globalService: GlobalSeviceService) { }

  ngOnInit(): void {
  }

}
