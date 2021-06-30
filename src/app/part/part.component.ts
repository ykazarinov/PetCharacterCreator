import {Component, Input, OnInit} from '@angular/core';
import {Category, GlobalSeviceService, Part} from '../services/global-sevice.service';

@Component({
  selector: 'app-part',
  templateUrl: './part.component.html',
  styleUrls: ['./part.component.scss']
})
export class PartComponent implements OnInit {

  @Input() one_part: Part;
  @Input() cont_categ_id: Category; 



  actual_categ_id: number;

  non_svg: string[];

  constructor(public globalService: GlobalSeviceService) {
    // this.actual_categ_id = globalService.actual_categ_id;
    this.non_svg = globalService.non_changeable_parts_svg; 
    //  console.log("this.actual_categ_id " + this.actual_categ_id);

  }



  ngOnInit(): void {
    if(this.one_part.default === 1){
      this.one_part.css_part_active = true;
      
    }else{
      this.one_part.css_part_active = false;
    }
    
  }

  active_detail(){
    let new_categ_id = this.one_part.categ_id;
     // выделяем css активную деталь
     if(this.one_part.css_part_active === false){
      for(let i in this.globalService.parts){
        if(this.globalService.parts[i].categ_id === new_categ_id){
          this.globalService.parts[i].css_part_active = false;  // все детали делаем неактивными
        }
      }
      this.one_part.css_part_active = true; // кликуемую деталь делаем активной
    }
  }



  choose_detail(){

    let new_categ_id = this.one_part.categ_id;
    let main_categ_part;
    let existPartsOfCateg = false;
    let main_part_index;

    for(let i in this.globalService.myAnimal.my_parts){
      // найти индекс запчасти в готовом животном из той же категории, что и текущая деталь:
      if (this.globalService.myAnimal.my_parts[i].categ_id == new_categ_id){
        main_categ_part = i;
        existPartsOfCateg = true;
      }
      // найти индекс запчасти в готовом животном с тем же id что и кликаемая деталь
      if (this.globalService.myAnimal.my_parts[i].id == this.one_part.id){
        main_part_index = i;
      }
    }
    //===================

    if (this.one_part.required_detail === 1){ // Если добавляемая деталь является обязательной
      this.globalService.myAnimal.my_parts[main_categ_part] = this.one_part;
      this.active_detail();
    }
    else{  // если добавляемая деталь Не является обязательной
      if(this.one_part.subjoin != 1){ // если деталь не является добавляемой
        if(this.one_part.css_part_active == false){ // если кликается ещё не выбранная деталь
          if(existPartsOfCateg === false){ // если среди частей ещё не выбрана ни одна
            this.globalService.myAnimal.my_parts.push(this.one_part);
            this.active_detail();
          }
          else{ // если среди запчастей уже выбрана запчасть данной категории
            this.globalService.myAnimal.my_parts[main_categ_part] = this.one_part;
            this.active_detail();
          }
        }
        else{ // если кликается уже выбранная деталь
          this.globalService.myAnimal.my_parts.splice(main_categ_part, 1);
          this.one_part.css_part_active = false;
        }
      }
      else{ // если деталь является добавляемой
        if(this.one_part.css_part_active == false){ // если кликается ещё не выбранная деталь
          this.globalService.myAnimal.my_parts.push(this.one_part);
          this.one_part.css_part_active = true;
        }
        else{ // если кликается уже выбранная деталь
          this.globalService.myAnimal.my_parts.splice(main_part_index, 1);
          this.one_part.css_part_active = false;
        }
      }
    }
      
  }// конец процедуры choose_detail


}
