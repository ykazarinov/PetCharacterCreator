import {ChangeDetectorRef, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {GlobalSeviceService} from '../services/global-sevice.service';
import {MatDialog} from '@angular/material/dialog';
import { ColWinComponent } from '../col-win/col-win.component';

/**
 * @title Dialog with header, scrollable content and actions
 */

// declare var M: any;

@Component({
  selector: 'app-constructor-page',
  templateUrl: './constructor-page.component.html',
  styleUrls: ['./constructor-page.component.scss']
})

export class ConstructorPageComponent implements OnInit {
  
  // @Input() colorWinHide = true; 
  
  // @ViewChild('modal') modal: ElementRef;
  
  
  
  loading = false;

  constructor(
    public globalService: GlobalSeviceService, 
    public dialog: MatDialog,
    private cd: ChangeDetectorRef) {
   }

  ngOnInit(): void {
    
    this.transferConstructorData(this.globalService.myAnimal.animal_id, this.globalService.myAnimal.gender_id);

  }

  ngAfterViewInit() {

    // this.globalService.verifActivePart();

  }
  ngOnChanges(){
    
  }

  ngAfterViewChecked(){
    this.globalService.verifActivePart();
  }




  openDialog() {
    const dialogRef = this.dialog.open(ColWinComponent,{
      height: 'calc(100% - 3rem)',
      width: 'calc(100% - 3rem)',
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });
  }

  // bodyColorClick(){
  //   this.colorWinHide = false;
  //   // console.log(this.globalService.color_icons);
  // }

  transferConstructorData(anim_id, gender_id){
    this.loading = true;
   
    this.globalService.loadCategoriesAndParts(anim_id, gender_id)
      .subscribe(response => { 
        
        this.globalService.constructor_resp = response; 

        console.log(response);

        this.globalService.categories = this.globalService.constructor_resp.constructor_page['categ_parts'];
        this.globalService.parts = this.globalService.constructor_resp.constructor_page['parts'];
        
        this.globalService.color_icons = this.globalService.constructor_resp.constructor_page['color_icons'];
        this.globalService.colors_hues = this.globalService.constructor_resp.constructor_page['colors_hues'];
        this.globalService.colors_luminosity = this.globalService.constructor_resp.constructor_page['colors_luminosities'];
        this.globalService.colors = this.globalService.constructor_resp.constructor_page['colors'];

        // this.globalService.myAnimal.bg_color = 


        // console.log('constr ', this.globalService.colors_luminosity);

        let j;
        let i = 0;
        for (j in this.globalService.categories) {
          if (this.globalService.categories[j].changeable){
            i ++;
            if (i === 1){
              this.globalService.categories[j].css_categ_active = true;
            }
            else {
              this.globalService.categories[j].css_categ_active = false;
            }
          }
          
        } 
        // сохраняем текущие детали в локальную переменную  myAnimalParts
        let k;
        let l = 0;
        let myAnimalParts = [];

        for (k in this.globalService.parts) {
          if (!this.globalService.parts[k].changeable || this.globalService.parts[k].default){
            l++;
            myAnimalParts[l] = this.globalService.parts[k]; 
          }
        }

        // загоняем локальную переменную в this.globalService.myAnimal.my_parts + 
        // преобразовываем объект в массив
        for(let key in myAnimalParts){  
          if(myAnimalParts.hasOwnProperty(key)){  
            this.globalService.myAnimal.my_parts.push(myAnimalParts[key]);   
          }  
        } 
        this.loading = false;
        

        // this.globalService.myAnimal.bg_color = this.globalService.myAnimal.my_parts[0].bg_color_default;
        // this.globalService.myAnimal.spec_color = this.globalService.myAnimal.my_parts[0].spec_color_default;

        console.log('myAnimal', this.globalService.myAnimal);

      });
      
    }
  

  body_color(){
    this.globalService.choose_color_type = 1;
  }

  main_color(categ2){
    this.globalService.choose_color_type = 2;
    this.globalService.categ_id_for_color = categ2;
    
  }

  spec_color(categ2){
    this.globalService.choose_color_type = 3;
    this.globalService.categ_id_for_color = categ2;
   
  }




}