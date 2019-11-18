import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { FormsModule } from '@angular/forms'; //needed for data binding process
import { HttpClientModule } from '@angular/common/http';  // importing http client

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, //needed to import to ngModule
    HttpClientModule   // importing http client
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
