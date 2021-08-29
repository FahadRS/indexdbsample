import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DexieService } from './dexie.service';
import { TodosService } from './timeddata.servie';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  
  providers: [TodosService, DexieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
