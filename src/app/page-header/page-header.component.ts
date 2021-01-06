import {Component, Input, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LangWinComponent } from '../lang-win/lang-win.component';
import {GlobalSeviceService} from '../services/global-sevice.service';
// import {ActivatedRoute, Params} from '@angular/router';


@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit {

  

  constructor(public globalService: GlobalSeviceService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    // this.route.params.subscribe((params: Params) => {
    //   console.log(params);
    // });


  }

  openLangDialog() {
    const dialogRef = this.dialog.open(LangWinComponent,{
      // height: 'calc(100% - 3rem)',
      // width: 'calc(50% - 3rem)',
    });
  }

}
