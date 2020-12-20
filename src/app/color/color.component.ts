import { Component, Input, OnInit } from '@angular/core';
import { Color, GlobalSeviceService } from '../services/global-sevice.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss']
})
export class ColorComponent implements OnInit {

  @Input() color: Color;

  constructor(public globalService: GlobalSeviceService) { }

  ngOnInit(): void {
  }

  takeColor(){
    if(this.globalService.choose_color_type === 1){ // если выбирается цвет для тела
      // для текущих деталей
      for(let i in this.globalService.myAnimal.my_parts){ 
        if(this.globalService.myAnimal.my_parts[i].have_body_color === 1){
          this.globalService.myAnimal.my_parts[i].bg_color_default = this.color.rgb_color;
          // console.log(this.globalService.myAnimal.my_parts[i].bg_color_default);
        }
       }
       // для всех деталей в наборе
       for(let j in this.globalService.parts){
         if(this.globalService.parts[j].have_body_color === 1){
          this.globalService.parts[j].bg_color_default = this.color.rgb_color;
         }
       }
    }
    else if(this.globalService.choose_color_type === 2){ // если выбирается основной цвет дополнительной детали

      for(let i in this.globalService.myAnimal.my_parts){ 
        if(this.globalService.myAnimal.my_parts[i].categ_id === this.globalService.categ_id_for_color){
          
          if(this.globalService.myAnimal.my_parts[i].have_body_color === 0 || 
            this.globalService.myAnimal.my_parts[i].have_body_color === null){
            this.globalService.myAnimal.my_parts[i].bg_color_default = this.color.rgb_color;
            
          }
        }
      }
      
      for(let j in this.globalService.parts){
        // console.log(this.globalService.parts[j].categ_id);
        // console.log(this.globalService.categ_id_for_color);
        // console.log('--------------------');
        if(this.globalService.parts[j].categ_id === this.globalService.categ_id_for_color){
          
          if(this.globalService.parts[j].have_body_color === 0 || 
            this.globalService.parts[j].have_body_color === null){
              
            this.globalService.parts[j].bg_color_default = this.color.rgb_color;
          }
        }
      }
    }
    else if(this.globalService.choose_color_type === 3){ // если выбирается спец цвет дополнительной детали
      for(let i in this.globalService.myAnimal.my_parts){ 
        if(this.globalService.myAnimal.my_parts[i].categ_id === this.globalService.categ_id_for_color){
          // if(this.globalService.myAnimal.my_parts[i].have_body_color === 0){
            this.globalService.myAnimal.my_parts[i].spec_color_default = this.color.rgb_color;
          // }
        }
      }

      for(let j in this.globalService.parts){
        if(this.globalService.parts[j].categ_id === this.globalService.categ_id_for_color){
          // if(this.globalService.parts[j].have_body_color === 0){
            this.globalService.parts[j].spec_color_default = this.color.rgb_color;
          // }
        }
      }




    }
    
     
  }

}
