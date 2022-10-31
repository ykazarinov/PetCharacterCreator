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
import { PetBackgroundPageComponent } from './pet-background-page/pet-background-page.component';
import { PetbgComponent } from './petbg/petbg.component';

import { DBConfig, NgxIndexedDBModule } from 'ngx-indexed-db';
import { MyPetsComponent } from './my-pets/my-pets.component';
import { DialogWinComponent } from './dialog-win/dialog-win.component';
import { DeletedPetComponent } from './deleted-pet/deleted-pet.component';


// Ahead of time compiles requires an exported function for factories
export function migrationFactory() {
  // The animal table was added with version 2 but none of the existing tables or data needed
  // to be modified so a migrator for that version is not included.
  return {
    1: (db, transaction) => {
      const store = transaction.objectStore('mypet');
      store.createIndex('country', 'country', { unique: false });
    },
    3: (db, transaction) => {
      const store = transaction.objectStore('mypet');
      store.createIndex('age', 'age', { unique: false });
    }
  };
}

const dbConfig: DBConfig  = {
  name: 'MyDb',
  version: 5,
  objectStoresMeta: [{
    store: 'mypet',
    storeConfig: { keyPath: 'id', autoIncrement: true },
    storeSchema: [
      { name: 'animal_id', keypath: 'animal_id', options: { unique: false } },
      { name: 'choosed_bg_url', keypath: 'choosed_bg_url', options: { unique: false } },
      { name: 'gender_id', keypath: 'gender_id', options: { unique: false } },
      { name: 'name', keypath: 'name', options: { unique: false } },
      { name: 'my_parts', keypath: 'my_parts', options: { unique: false } },
      // {  name: 'my_parts1', keypath: [ 
      //   {name: 'test1', keypath: 'test1', options: { unique: false }},
      //   {name: 'test2', keypath: 'test2', options: { unique: false }},
      // ] }

    ]
  }
  // , {
  //   // animals added in version 2
  //   store: 'animals',
  //   storeConfig: { keyPath: 'id', autoIncrement: true },
  //   storeSchema: [
  //     { name: 'name', keypath: 'name', options: { unique: true } },
  //   ]
  // }
],
  // provide the migration factory to the DBConfig
  migrationFactory
};
 

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
    PetNameComponent,
    PetBackgroundPageComponent,
    PetbgComponent,
    MyPetsComponent,
    DialogWinComponent,
    DeletedPetComponent
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
    FormsModule,
    NgxIndexedDBModule.forRoot(dbConfig)
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

