import { BeerService } from './services/beer.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { AddbeersComponent } from './addbeers/addbeers.component';

export const firebaseConf = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyA4OYNTBgsCUicjPYFbQIlI9M9j5qhODjk',
    authDomain: 'localhost',
    databaseURL: 'https://beer-ping.firebaseio.com/',
    projectId: 'beer-ping',
    storageBucket: 'gs://beer-ping.appspot.com',
    messagingSenderId: '989921876278'
  }
};

@NgModule({
  declarations: [
    AppComponent,
    AddbeersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConf.firebase)
  ],
  providers: [BeerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
