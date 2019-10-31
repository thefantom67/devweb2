import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Hotel } from '../../models/hotel';
import { Store } from '@ngxs/store';
import { SwipeService } from '../../services/swipe.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  Hotels: Observable<Hotel[]>; 
  
  constructor(private store: Store, private SwipeService : SwipeService,) {
    this.Hotels = this.store.select(state => state.panier.panier);
   }

  ngOnInit() {
  }

}
