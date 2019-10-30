import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
import { PanierComponent } from './panier/panier.component';
import { PanierState } from '../../../shared/stats/panier-state';


@NgModule({
  declarations: [CartComponent,
    PanierComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxsModule.forRoot([
      PanierState
    ]),
  ]
})
export class CartModule { }
