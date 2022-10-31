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
   
  }


  ngAfterViewChecked() { 


    
  }

}
