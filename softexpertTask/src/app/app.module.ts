import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/app.headerComponent';
import { FooterComponent } from './footer/app.footerComponent';
import { NavComponent } from './nav/app.navComponent';
import { HomeComponent } from './home/app.homeComponent';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule  { }
