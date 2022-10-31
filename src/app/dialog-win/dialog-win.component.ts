import { Component, OnInit } from '@angular/core';
import { GlobalSeviceService } from '../services/global-sevice.service';
import { NgxIndexedDBService, ObjectStoreMeta } from 'ngx-indexed-db';

@Component({
  selector: 'app-dialog-win',
  templateUrl: './dialog-win.component.html',
  styleUrls: ['./dialog-win.component.scss']
})
export class DialogWinComponent implements OnInit {

  constructor(public globalService: GlobalSeviceService, private dbService: NgxIndexedDBService, ) { }

  public current_lang: any;
  ngOnInit(): void {
    for(let i in this.globalService.languages){
      if(this.globalService.languages[i].current === true){
        this.current_lang = this.globalService.languages[i];
      }
    }
  }





}
