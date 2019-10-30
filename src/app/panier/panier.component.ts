import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Hotel } from '../models/hotel';
import {PanierState} from '../../../shared/stats/panier-state';
import { DelHotel } from '../../../shared/actions/article-delaction';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  panier: Observable<Hotel>; 
  
  constructor(private store: Store) {
    this.panier = this.store.select(state => state.panier.panier);
   }
  onDelClick () {
    this.DelHotel();
  }
  DelHotel() { this.store.dispatch(new DelHotel()); }
  
  ngOnInit() {
  }

}
