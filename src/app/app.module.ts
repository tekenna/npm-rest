import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BtnLib2Module } from 'btn-lib-2';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, BtnLib2Module],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
