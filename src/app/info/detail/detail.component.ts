import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Hotel } from '../../models/hotel';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  Hotels : Observable<Hotel[]>

  constructor() { }

  ngOnInit() {
  }

}
