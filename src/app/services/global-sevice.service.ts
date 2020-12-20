import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';
import { Observable } from 'rxjs';

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
  z_index: number
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



@Injectable({
  providedIn: 'root'
})
export class GlobalSeviceService {

  server_url: string = 'http://localhost:8000/';
  server_media_url: string = 'storage/';

  headerisVisible = false;
  app_title_1: string = "Pet\'s";
  app_title_2: string = 'character';
  app_title_3: string = 'creator';
  begin_bot_text: string = 'play now!';


  animals: Animal[] = [];
  genders: Gender[] = [];

  myAnimal: MyAnimal = {animal_id: 0, gender_id: 0, my_parts:[] = []};

  menu_items: Menu[] = [];
  pages: Page[] = [];
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

  constructor(public http: HttpClient) {
    
    }

  loadCategoriesAndParts(anim_id, gender_id): Observable<Category>{
    return this.http.get<Category>(this.server_url + 'constructor_page?anim_id=' + anim_id
    + "&gender_id=" + gender_id);

    
  }

  // выставление активности для кнопок цвета для деталей
  verifActivePart(){
    this.main_color_btn_active = false;
    this.spec_color_btn_active = false;
    for(let i in this.categories){
      if(this.categories[i].css_categ_active === true){
        for(let j in this.parts){
          if(this.categories[i].id === this.parts[j].part_categ_id){
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




}
