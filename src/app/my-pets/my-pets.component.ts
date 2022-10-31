import { Component, OnInit } from '@angular/core';
import { GlobalSeviceService } from '../services/global-sevice.service';





@Component({
  selector: 'app-my-pets',
  templateUrl: './my-pets.component.html',
  styleUrls: ['./my-pets.component.scss']
})



export class MyPetsComponent implements OnInit {



  constructor(
    public globalService: GlobalSeviceService) { }

  ngOnInit(): void {
    this.globalService.getAllMyPets();
    console.log('wefw', this.globalService.allMyPets);
  }



  ngOnChanges(){
    
  }



  get_del_pet_id(){
    // this.globalService.del_pet_id = this.pettt.my_pet.id;
    // console.log(this.globalService.del_pet_id);
  }




}
