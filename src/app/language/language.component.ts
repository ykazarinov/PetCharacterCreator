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
    
    let lang_standart: any;
    let page_standart: any;
    let wins_standart: any;
    
    for(let h in this.globalService.languages){
      if(this.globalService.languages[h].locale === 'en'){
        lang_standart = this.globalService.languages[h].menu_items;
        page_standart =  this.globalService.languages[h].pages;
        wins_standart =  this.globalService.languages[h].wins;
        
      }
    }
  


  
    this.globalService.getTranslate(locale).subscribe(response => {
      this.lang_resp = response; 

      console.log('lang_resp', this.lang_resp);
      for(let h in this.globalService.languages){
      // если в переменной выбранного языка ещё нет данных, то берем язык по умолчанию    
        if(this.globalService.languages[h].locale === locale && !this.globalService.languages[h].menu_items){
          this.globalService.languages[h].menu_items = lang_standart;
        }
        for(let i in this.globalService.languages[h].menu_items){
          for(let j in this.lang_resp.translate.my_menu){
            if(this.globalService.languages[h].menu_items[i].id === 
              this.lang_resp.translate.my_menu[j].id){
                this.globalService.languages[h].menu_items[i].title = 
                this.lang_resp.translate.my_menu[j].title;
            }
          }
        }
        // для pages
        if(this.globalService.languages[h].locale === locale && !this.globalService.languages[h].pages){
          this.globalService.languages[h].pages = page_standart;
        }
        for(let i in this.globalService.languages[h].pages){
          for(let j in this.lang_resp.translate.pages){
            if(this.globalService.languages[h].pages[i].id === 
              this.lang_resp.translate.pages[j].id){
                this.globalService.languages[h].pages[i].title = 
                this.lang_resp.translate.pages[j].title;

                this.globalService.languages[h].pages[i].body = 
                this.lang_resp.translate.pages[j].body;
            }
          }
        }
        // для wins
        if(this.globalService.languages[h].locale === locale && !this.globalService.languages[h].wins){
          this.globalService.languages[h].wins = wins_standart;
        }
        for(let i in this.globalService.languages[h].wins){
          for(let j in this.lang_resp.translate.wins){
            if(this.globalService.languages[h].wins[i].id === 
              this.lang_resp.translate.wins[j].id){
                this.globalService.languages[h].wins[i].title = 
                this.lang_resp.translate.wins[j].title;
            }
          }
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

    console.log('rrr', this.globalService.languages);
  }
}