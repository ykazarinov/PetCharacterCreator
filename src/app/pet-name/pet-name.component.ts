import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalSeviceService } from '../services/global-sevice.service';

@Component({
  selector: 'app-pet-name',
  templateUrl: './pet-name.component.html',
  styleUrls: ['./pet-name.component.scss']
})
export class PetNameComponent implements OnInit {
  form: FormGroup;


  constructor(
    public globalService: GlobalSeviceService,
    private router: Router
    ) { }

  public current_lang: any;
  public page_url: any;
  public currentPageInput: any;
  public currentPageButton: any;

  title = '';

  ngOnInit(): void {
    this.form = new FormGroup({})

  }


  ngDoCheck(){
    this.page_url =  this.router.url.slice(1);

    for(let i in this.globalService.languages){
      if(this.globalService.languages[i].current === true){
        this.current_lang = this.globalService.languages[i];
        
        for(let j in this.current_lang.inputs){
          if(this.current_lang.inputs[j].page_url === this.page_url){
            this.currentPageInput = this.current_lang.inputs[j];
          }
        }
        for(let j in this.current_lang.buttons){
          if(this.current_lang.buttons[j].page_url === this.page_url){
            this.currentPageButton = this.current_lang.buttons[j];
          }
        }



      }
    }
  }



  onInput(event:any){
    this.title = event.target.value;
    this.globalService.myAnimal.name = event.target.value;
    // console.log(this.globalService.myAnimal);
  }

}
