import { Component, OnInit } from '@angular/core';
import { GlobalSeviceService } from '../services/global-sevice.service';

@Component({
  selector: 'app-my-pets',
  templateUrl: './my-pets.component.html',
  styleUrls: ['./my-pets.component.scss']
})
export class MyPetsComponent implements OnInit {

  constructor(public globalService: GlobalSeviceService) { }

  ngOnInit(): void {
    this.globalService.getAllMyPets();
  }

}
