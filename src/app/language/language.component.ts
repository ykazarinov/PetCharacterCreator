import { Component, Input, OnInit } from '@angular/core';
import { GlobalSeviceService, Language } from '../services/global-sevice.service';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})
export class LanguageComponent implements OnInit {

  @Input() lang: Language;

  lang_resp: any;

  

  constructor(public globalService: GlobalSeviceService) { }

  ngOnInit(): void {
  }

  translate(locale){
    
    this.globalService.getTranslate(locale).subscribe(response => {
      this.lang_resp = response; 
      console.log(this.lang_resp);
      for(let h in this.globalService.languages){
        if(this.globalService.languages[h].locale === locale){
          this.globalService.languages[h].menu_items = this.lang_resp.translate.my_menu;
          this.globalService.languages[h].pages = this.lang_resp.translate.pages;
          this.globalService.languages[h].wins = this.lang_resp.translate.wins;
          this.globalService.languages[h].buttons = this.lang_resp.translate.buttons;
          this.globalService.languages[h].inputs = this.lang_resp.translate.inputs;
        }
      }
    })
    //================
    for(let i in this.globalService.languages){
      // 2. меняем активный язык
      this.globalService.languages[i].current = false;
      if(this.globalService.languages[i].locale === locale){
        this.globalService.languages[i].current = true;
      }
    }


  }
}