import { Component, Input, OnInit } from '@angular/core';
import { GlobalSeviceService } from '../services/global-sevice.service';
import {MatDialog} from '@angular/material/dialog';
import { DialogWinComponent } from '../dialog-win/dialog-win.component';

@Component({
  selector: 'app-deleted-pet',
  templateUrl: './deleted-pet.component.html',
  styleUrls: ['./deleted-pet.component.scss']
})
export class DeletedPetComponent implements OnInit {


  @Input() mypet: any;

  constructor(public globalService: GlobalSeviceService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogWinComponent,{
      height: 'auto',
      width: 'auto',
    });

  
  }

  get_del_pet_id(){}

}
