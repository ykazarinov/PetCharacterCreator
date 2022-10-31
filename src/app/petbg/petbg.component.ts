import { Component, Input, OnInit } from '@angular/core';
import { GlobalSeviceService, PetBackground } from '../services/global-sevice.service';

@Component({
  selector: 'app-petbg',
  templateUrl: './petbg.component.html',
  styleUrls: ['./petbg.component.scss']
})
export class PetbgComponent implements OnInit {

  @Input() e_bg: PetBackground;
  


  constructor(public globalService: GlobalSeviceService) { }

  ngOnInit(): void {
    this.e_bg.css_bg_active = false;
  }

  choose_bg(){
    let j;
    for (j in this.globalService.petBackgrounds) {
      this.globalService.petBackgrounds[j].css_bg_active = false;
    }
    this.e_bg.css_bg_active = true;
    this.globalService.myAnimal.choosed_bg_url = this.e_bg.image;
    
    
  }

}
