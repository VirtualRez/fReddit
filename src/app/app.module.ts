import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';

//SERVICES
import {ApiService} from './services/api.service';
import {UserService} from './services/user.service';

//AJAX
import {HttpClientModule} from '@angular/common/http';
//Router
import { Routes, RouterModule } from '@angular/router';
const misRutas: Routes = [
  { 'path': 'home', 'component': HomeComponent },
  { 'path': 'post/:id', 'component': DetailComponent },
  { 'path': '', 'component': HomeComponent },
  { 'path': '**', 'component': HomeComponent }
];



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(misRutas)
  ],
  providers: [UserService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
