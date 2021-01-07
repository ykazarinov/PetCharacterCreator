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
    let i;
    let j = 0;
    for ( i in globalService.parts ){
      if ( !globalService.parts[i].changeable){
          globalService.non_changeable_parts_svg[j] = globalService.parts[i].layer_1_code_bg;
           j++;
          globalService.non_changeable_parts_svg[j] = globalService.parts[i].layer_2_code_outline;
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
    
  }

}
