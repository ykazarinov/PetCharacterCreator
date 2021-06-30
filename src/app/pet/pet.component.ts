import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import {GlobalSeviceService, Part} from '../services/global-sevice.service';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.scss']
})
export class PetComponent implements OnInit { 

  @Input() one_part: Part;

  @ViewChild("bg_color", {static: false})   
  bg_color: ElementRef;

  @ViewChild("spec_color", {static: false})
  spec_color: ElementRef;

  @ViewChild("white_color", {static: false})
  white_color: ElementRef;
  
  @ViewChild("glare_color", {static: false})
  glare_color: ElementRef;
 

  constructor(  public globalService: GlobalSeviceService) { 
  }

  ngOnInit(): void {

    
  } 


  ngOnChanges(){
    
  }

  ngAfterViewInit() {
    
  }

  ngAfterViewChecked(){
    this.colorize();
  }



  colorize(){
    if(this.bg_color.nativeElement.children[0]){
        if(this.bg_color.nativeElement.children[0].querySelector("g")){
          this.bg_color.nativeElement.children[0].querySelector("g").style="fill: " + this.one_part.bg_color_default;
        }
      }

      if(this.spec_color.nativeElement.children[0]){
        if(this.spec_color.nativeElement.children[0].querySelector("g")){
          this.spec_color.nativeElement.children[0].querySelector("g").style="fill: " + this.one_part.spec_color_default;
        }
      }

      if(this.white_color.nativeElement.children[0]){
        if(this.white_color.nativeElement.children[0].querySelector("g")){
          this.white_color.nativeElement.children[0].querySelector("g").style="fill: #ffffff";
        }
      }

      if(this.glare_color.nativeElement.children[0]){
        if(this.glare_color.nativeElement.children[0].querySelector("g")){
          this.glare_color.nativeElement.children[0].querySelector("g").style="fill: #ffffff";
        }
      }
  }


}


