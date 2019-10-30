import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngxs/store';
import { SwipeService } from '../services/swipe.service';
import { Hotel } from '../models/hotel';
import { AddHotel } from 'shared/actions/article-action';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {

  Hotels : Observable<Hotel[]>

  constructor(private SwipeService : SwipeService, private store: Store) {
    this.Hotels = this.store.select(state => state.panier.panier);
  }

  onClick (hotel: Hotel) {
    this.addHotel(hotel);
  }

  addHotel(hotel: Hotel) {
    this.store.dispatch(new AddHotel(hotel)); }

  ngOnInit() {
    this.Hotels = this.SwipeService.getHotels ();
  }

}
