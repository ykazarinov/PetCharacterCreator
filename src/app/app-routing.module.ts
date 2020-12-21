import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StartPageComponent} from './start-page/start-page.component';
import {AnimalsPageComponent} from './animals-page/animals-page.component';
import {GenderPageComponent} from './gender-page/gender-page.component';
import {ConstructorPageComponent} from './constructor-page/constructor-page.component';
import { PageComponent } from './page/page.component';
import { PageHeaderComponent } from './page-header/page-header.component';

const routes: Routes = [
    {path: '', component: StartPageComponent},
    {path: 'animals', component: AnimalsPageComponent},
    {path: 'genders', component: GenderPageComponent},
    {path: 'constructor', component: ConstructorPageComponent},
    {path: ':url', component: PageComponent}
    // {path: 'termsofuse', component: PageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
