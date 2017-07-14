import { LoginService } from './services/login.service';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { BeerService } from './services/beer.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { AddbeersComponent } from './addbeers/addbeers.component';
import { LoginComponent } from './login/login.component';

export const firebaseConf = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyA4OYNTBgsCUicjPYFbQIlI9M9j5qhODjk',
    authDomain: 'beer-ping.firebaseapp.com',
    databaseURL: 'https://beer-ping.firebaseio.com/',
    projectId: 'beer-ping',
    storageBucket: 'gs://beer-ping.appspot.com',
    messagingSenderId: '989921876278'
  }
};

@NgModule({
  declarations: [
    AppComponent,
    AddbeersComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConf.firebase),
    AngularFireAuthModule
  ],
  providers: [BeerService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
