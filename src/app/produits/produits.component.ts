import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SwipeService } from '../services/swipe.service';
import { Hotel } from '../models/hotel';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {

  constructor(private SwipeService : SwipeService) { }
  Hotels : Observable<Hotel[]>
  ngOnInit() {
    this.Hotels = this.SwipeService.getHotels ();
  }

}
