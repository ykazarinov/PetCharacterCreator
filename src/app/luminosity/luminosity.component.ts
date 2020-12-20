import { Component, Input, OnInit, QueryList, ViewChildren} from '@angular/core';
import { colorHue, colorsLuminositie, GlobalSeviceService } from '../services/global-sevice.service';

/**
 * @title Dynamic grid-list
 */

@Component({
  selector: 'app-luminosity',
  templateUrl: './luminosity.component.html', 
  styleUrls: ['./luminosity.component.scss']
})
export class LuminosityComponent implements OnInit {


  @Input() colors_hue: colorHue;
  @Input() colors_luminosity: colorsLuminositie;
  // @ViewChildren("one_vertical_tab") one_vertical_tab: QueryList<any>;

  constructor(public globalService: GlobalSeviceService) { }

  ngOnInit(): void {
    
  }

  ngAfterViewInit() {
   
  }

  ngAfterViewChecked(){
    // this.one_vertical_tab.forEach((myverttab, index) => myverttab.nativeElement.style = 'background-color: ' + this.globalService.colors_luminosity[index].luminosity_hex);   
  
  }

}
