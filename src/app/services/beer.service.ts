import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class BeerService {
  private beer: any = {};
  constructor(public http: Http) { }

  setUser = (beer) => {
    this.beer = beer;
  }

  sendBeers = (beer) => {

    localStorage.setItem('beer', JSON.stringify(this.beer));
  }
}
