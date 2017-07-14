import { BeerService } from './../services/beer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addbeers',
  templateUrl: './addbeers.component.html',
  styleUrls: ['./addbeers.component.scss']
})
export class AddbeersComponent implements OnInit {

  constructor(private beerService: BeerService) { }

  ngOnInit() {
  }

  addBeers = (value) => {
    console.log('homma toimii');
    const beer = {
      beerName: value.beername,
      abv: value.abv,
      ibu: value.ibu,
      price: value.price,
      description: value.description,
      country: value.country,
      brewer: value.brewer,
      type: value.type,
      style: value.style
    };
    console.log(beer);
    this.beerService.setUser(beer);
    this.beerService.sendBeers(beer);

  }
}
