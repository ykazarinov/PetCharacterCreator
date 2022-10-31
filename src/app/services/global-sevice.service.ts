import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { NgxIndexedDBService, ObjectStoreMeta } from 'ngx-indexed-db';

export interface Animal {
  id: number
  animal_title: string
  image: string
  active: boolean
}

export interface Gender{
  id: number
  gender_title: string
  gender_image: string
}

export interface MyAnimal{
  animal_id: number
  gender_id?: number
  my_parts?: Part[]
  name?: string
  choosed_bg_url?: string;


}

export interface Menu{
  id: number
  title: string
  icon_class: string
  url: string
  parent_id: number
  order: number
}

export interface Category{
  id: number
  active: boolean
  animal_id: number
  bg_color_default: string
  bg_color_default_id: number
  categ_title: string
  changeable: boolean
  color_id: number
  have_body_color: boolean
  have_spec_color: boolean
  image: string
  required_detail: boolean
  spec_color_default: string
  spec_color_default_id: number
  subjoin: boolean
  z_index?: number
  css_categ_active?: boolean
}

export interface Part{
  active: any
  categ_id: number
  categ_title: string
  changeable: any
  default: any
  have_body_color: any
  id: number
  layer_1_code_bg: string
  layer_2_code_outline: string
  layer_2_code_white:string
  layer_3_code_speccol: string
  layer_4_code_glare: string
  locked: any
  part_categ_id: number
  part_name: string
  subjoin: any
  required_detail: any
  bg_color_default: string
  spec_color_default: string
  css_part_active?: any
  z_index?: number

}

export interface colorHue{
  active: boolean
  hue_hex: string
  hue_title: string
  id: number
}

export interface colorsLuminositie{
  active: boolean
  luminosity_hex: string
  luminosity_title: string
  id: number
}

export interface Color{
  active: boolean
  luminosity_id: number
  hue_id: number
  id: number
  locked: boolean
  rgb_color: string
}

export interface Page{
  id: number
  title: string
  excerpt: string
  body: string
  image: string
  slug: string
  status: string
}

export interface SocNetwork{
  id: number
  name: string
  link: string
  image: string
  active: boolean
}


export interface Language{
  id: number
  title: string
  locale: string
  active: boolean
  current?: boolean
  menu_items?: Menu[]
  pages?: Page[]
  wins?: Win[]
  buttons?: Button[]
  inputs?: Input[]
}

export interface Win{
  id: number
  title: string
}

export interface Button{
  id: number
  active: boolean
  title: string
  link: string
  page_url: string
}

export interface Input{
  id: number
  active: boolean
  form_name: string
  label: string
  placeholder: string
  page_url: string
  
}

export interface PetBackground{
  id: number
  active: boolean
  image: string
  locked: boolean
  css_bg_active?: boolean
}


@Injectable({
  providedIn: 'root'
})
export class GlobalSeviceService {

  server_url1: string = process.env.SERVER_URL;
  server_url: string = 'https://serene-pasteur.82-165-57-61.plesk.page/'
  // server_url: string = 'http://localhost:8000/';
  server_media_url: string = 'storage/';

  headerisVisible = false;
  app_title_1: string = "Pet\'s";
  app_title_2: string = 'character';
  app_title_3: string = 'creator';
  begin_bot_text: string = 'play now!';

  languages: Language[] = [];
  


  animals: Animal[] = [];
  genders: Gender[] = [];

  myAnimal: MyAnimal = {animal_id: 0, gender_id: 0, my_parts:[] = []};

  // переменные хранящие данные для перевода на разные языки
  menu_items: Menu[] = [];
  pages: Page[] = [];
  wins: Win[] = [];
  buttons: Button[] = [];
  inputs: Input[] = [];
  //===========

  soc_networks: SocNetwork[] = [];

  categories: Category[] = [];
  parts: Part[] = [];

  color_icons: any[] = [];
  colors_hues: colorHue[] = [];
  colorHue1:any[] = [];
  colors_luminosity: colorsLuminositie[] = [];
  colors: Color[] = [];

  actual_categ_id: number;

  non_changeable_parts_svg = []; 

  constructor_resp: any;
  
  
  choose_color_type: number;
  // 1 = body
  // 2 = main color of another part
  // 3 = spec color of another part

  categ_id_for_color: number; // id категории цвета 
  main_color_btn_active: boolean = false; // проверка активности кнопки выбора основного цвета для второстепенных деталей
  spec_color_btn_active: boolean = false; // проверка активности кнопки выбора спец цвета для второстепенных деталей


  lang_standart: any;

  // page_url: string;





  // stream$ = new Observable <Page>(observer => {
  //   this.page_url =  this.router.url.slice(1);
  //   console.log(this.page_url); 
  //   for(let i in this.languages){
  //     if(this.languages[i].current === true){
       
  //       setTimeout(() => {
  //         observer.next(
  //           this.languages[i].pages.find(p => p.slug === this.page_url)
  //           ); // happens asynchronously
  //         observer.complete();
  //         // subscriber.complete();
  //         return {unsubscribe() {}}
  //       }, 0);
  
       
  //     }
  //   }
  // });


  petBackgrounds: PetBackground[] = [];
  


  constructor(private dbService: NgxIndexedDBService, public http: HttpClient,
    // private router: Router
    ) {
    
    }

  loadCategoriesAndParts(anim_id, gender_id): Observable<Category>{
    console.log(this.server_url1)
    return this.http.get<Category>(this.server_url + 'constructor_page?anim_id=' + anim_id
    + "&gender_id=" + gender_id);

    
  }

  // установить активную категорию
  setActivCat(){
    for(let i in this.categories){
      if(this.categories[i].css_categ_active === true){
        for(let j in this.parts){
          if(this.categories[i].id === this.parts[j].part_categ_id){
            this.actual_categ_id = this.categories[i].id;
            
          }
        }
      }
    }
    // console.log("this.actual_categ_id " + this.actual_categ_id);
    
  }

  // выставление активности для кнопок цвета для деталей
  verifActivePart(){

    

    this.main_color_btn_active = false;
    this.spec_color_btn_active = false;
    for(let i in this.categories){
      if(this.categories[i].css_categ_active === true){
        for(let j in this.parts){
          if(this.categories[i].id === this.parts[j].part_categ_id){
            this.actual_categ_id = this.categories[i].id;
           
            if(this.parts[j].css_part_active === true){
              if(this.parts[j].layer_1_code_bg === null  || this.parts[j].have_body_color === 1){
                this.main_color_btn_active = false;
              }
              else{
                this.main_color_btn_active = true;
              }
              if(this.parts[j].layer_3_code_speccol === null){
                this.spec_color_btn_active = false;
              }
              else{
                this.spec_color_btn_active = true;
              }
            }
          }
        }
      }
    }
  }

  // по полученному url находим среди страниц нужную
 getByUrl(url: string){
  
    for(let i in this.languages){
       if(this.languages[i].current === true){
          return this.languages[i].pages.find(p => p.slug === url);
       
       }
     
    }
 
 }


  getTranslate(locale): Observable<Language>{
      console.log(this.server_url1)
      return this.http.get<Language>(this.server_url + 'get_lang?locale=' + locale);
    
   
  }

  loadPetBackgrounds(): Observable<PetBackground>{
    console.log(this.server_url1)
    return this.http.get<PetBackground>(this.server_url + 'get_petBackgrounds');

    
  }

  // пробую добавить запись в локальную базу данных

  addMan(){

    this.dbService
    .add('mypet', {
      animal_id: this.myAnimal.animal_id,
      choosed_bg_url: this.myAnimal.choosed_bg_url,
      gender_id: this.myAnimal.gender_id,
      name: this.myAnimal.name,
      my_parts: this.myAnimal.my_parts,
    })
    .subscribe((key) => {
      console.log('key: ', key);
    });

    this.dbService.getAll('mypet').subscribe((peoples) => {
      console.log(peoples);
    });

  }

  // считывание данных из базы на стороне клиента

  allMyPets: any[] = [];

  getAllMyPets(){
    this.dbService.getAll('mypet').subscribe((peoples) => {
    this.allMyPets = peoples.reverse();
    
    });
  }


  current_lang: any;
  currentPageButton: any;

  nextPageBtnText(page_url: any){

    for(let i in this.languages){
      if(this.languages[i].current === true){
        this.current_lang = this.languages[i];
        for(let j in this.current_lang.buttons){
          if(this.current_lang.buttons[j].page_url === page_url){
            this.currentPageButton = this.current_lang.buttons[j];
          }
        }
      }
    }
    return this.currentPageButton;
  }

  delResult : boolean = false;
  // del_pet_id: number;

  dialogResult(result){
    this.delResult = false;
    if(result === true){
      //return true;
      this.delResult = true;
      console.log('this.delResult:', this.delResult);
      
      
    }
   
  }

  deletePet(){
    // if (this.delResult === true){
    //   this.dbService.deleteByKey('mypet', del_pet_id).subscribe((status) => {
    //   console.log('Deleted?:', status);
    // });
    //  console.log('del');
    // }
    
  }


}
