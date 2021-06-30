import {Component, Input, OnInit} from '@angular/core';
import {Category, GlobalSeviceService} from '../services/global-sevice.service';

@Component({
  selector: 'app-parts-category',
  templateUrl: './parts-category.component.html',
  styleUrls: ['./parts-category.component.scss']
})
export class PartsCategoryComponent implements OnInit {

  @Input() one_category: Category;


  constructor(public globalService: GlobalSeviceService) {
    // this.globalService.setActivCat();
    // let i;
    // let j = 0;
    // //  console.log("one_category: ", this.one_category.id);
    // for ( i in globalService.parts ){
    //   // if ( !globalService.parts[i].changeable){

    //   if (  globalService.parts[i].required_detail === 1 && 
    //         globalService.parts[i].default === 1 &&
    //         globalService.parts[i].categ_id != globalService.actual_categ_id
    //         ){
    //       globalService.non_changeable_parts_svg[j] = globalService.parts[i].layer_1_code_bg;
    //        j++;
    //       globalService.non_changeable_parts_svg[j] = globalService.parts[i].layer_2_code_outline;
    //       j++;
    //   }
    // }
   

  }


  ngDoCheck(){
    this.globalService.setActivCat(); // выставляем текущую категорию
    let i;
    let j = 0;
    //  console.log("one_category: ", this.one_category.id);
    for ( i in this.globalService.parts ){
      // if ( !globalService.parts[i].changeable){

      if (  this.globalService.parts[i].required_detail === 1 && 
            this.globalService.parts[i].default === 1 
            && this.globalService.parts[i].categ_id != this.globalService.actual_categ_id
            ){
          this.globalService.non_changeable_parts_svg[j] = this.globalService.parts[i].layer_1_code_bg;
           j++;
          this.globalService.non_changeable_parts_svg[j] = this.globalService.parts[i].layer_2_code_outline;
          j++;
      }
    }
  }

  ngOnInit(): void {
    
  }

  onCategClick(){
    let j;
    for (j in this.globalService.categories) {
      this.globalService.categories[j].css_categ_active = false;
    }
    this.one_category.css_categ_active = true;

    this.globalService.verifActivePart();
    

    this.globalService.setActivCat();
  }

}
