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

  nom : string;
  prix: string;
  img: string;

  constructor(private SwipeService : SwipeService, private store: Store) {}
  Hotels : Observable<Hotel[]>
  panier: Observable<Hotel>

  onClick () {
    this.addHotel(this.nom, this.prix, this.img);
  }

  addHotel(nom, prix, img) { this.store.dispatch(new AddHotel({nom,prix,img})); }

  ngOnInit() {
    this.Hotels = this.SwipeService.getHotels ();
    this.panier = this.store.select(state => state.panier.panier);
  }

}
