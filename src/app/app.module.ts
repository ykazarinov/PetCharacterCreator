import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartPageComponent } from './start-page/start-page.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import {GlobalSeviceService} from './services/global-sevice.service';
import { AnimalsPageComponent } from './animals-page/animals-page.component';
import {HttpClientModule} from '@angular/common/http';
import { GenderPageComponent } from './gender-page/gender-page.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ConstructorPageComponent } from './constructor-page/constructor-page.component';
import { PartsCategoryComponent } from './parts-category/parts-category.component';
import { PartComponent } from './part/part.component';
import { SafeHtmlPipe } from './safe-html.pipe';
import { PetComponent } from './pet/pet.component';
import { ColWinComponent } from './col-win/col-win.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { LuminosityComponent } from './luminosity/luminosity.component';
import { ColorComponent } from './color/color.component';
import { HueComponent } from './hue/hue.component';

import {MatTabsModule} from '@angular/material/tabs';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { PageComponent } from './page/page.component';
import { HederTitleComponent } from './heder-title/heder-title.component';
import { LangWinComponent } from './lang-win/lang-win.component';
import { LanguageComponent } from './language/language.component';
import { PetNameComponent } from './pet-name/pet-name.component';

@NgModule({
  declarations: [
    AppComponent,
    StartPageComponent,
    PageHeaderComponent,
    AnimalsPageComponent,
    GenderPageComponent,
    ConstructorPageComponent,
    PartsCategoryComponent,
    PartComponent,
    SafeHtmlPipe,
    PetComponent,
    ColWinComponent,

    LuminosityComponent,
    ColorComponent,
    HueComponent,
    PageComponent,
    HederTitleComponent,
    LangWinComponent,
    LanguageComponent,
    PetNameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,

    MatTabsModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,

    ReactiveFormsModule,
    FormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
