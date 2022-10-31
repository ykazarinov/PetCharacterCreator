import { Component, Input, OnInit, QueryList, ViewChildren } from '@angular/core';
import { colorHue, colorsLuminositie, GlobalSeviceService } from '../services/global-sevice.service';

 
@Component({
  selector: 'app-col-win',
  templateUrl: './col-win.component.html',
  styleUrls: ['./col-win.component.scss']
})
export class ColWinComponent implements OnInit {

  constructor(public globalService: GlobalSeviceService) { 

   
  }
  public current_lang: any;

  ngOnInit(): void { 
    for(let i in this.globalService.languages){
      if(this.globalService.languages[i].current === true){
        this.current_lang = this.globalService.languages[i];
      }
    }
  }

  ngAfterViewInit() {    
  }

  ngAfterViewChecked(){
    
  }

}
