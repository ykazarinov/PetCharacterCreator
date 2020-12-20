import { Component, ElementRef, Input, OnInit, QueryList, Renderer2, ViewChild, ViewChildren  } from '@angular/core';
import { colorHue, GlobalSeviceService } from '../services/global-sevice.service';

/**
 * @title Basic use of the tab group
 */

@Component({
  selector: 'app-hue',
  templateUrl: './hue.component.html',
  styleUrls: ['./hue.component.scss']
})
export class HueComponent implements OnInit {

  @Input() colors_hue: colorHue;

  // @ViewChildren("one_tab") one_tab: QueryList<any>;

  // @ViewChild("one_tab", {static: false})  
  // one_tab: ElementRef;


  constructor(public globalService: GlobalSeviceService) { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    //  console.log(this.one_tab.nativeElement);
      // this.one_tab.nativeElement.querySelector(".one_tab").style = 'background-color: ' + this.colors_hue.hue_hex;
      
  }


  ngAfterViewChecked() { 
    // this.one_tab.forEach((myhoristab, index) => myhoristab.nativeElement.style = 'background-color: ' + this.globalService.colors_hues[index].hue_hex);
   
    // this.one_tab.nativeElement.style = 'background-color: ' + this.colors_hue.hue_hex;

   
    // this.spec_color.nativeElement.children[0].querySelector("g").style="fill: " + this.one_part.spec_color_default;
// console.log(this.globalService.colors_luminosity);

    
  }

}
