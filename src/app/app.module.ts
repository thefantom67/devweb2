import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxsModule } from '@ngxs/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TetiereComponent } from './tetiere/tetiere.component';
import { FooterComponent } from './footer/footer.component';
import { SwipeService } from './services/swipe.service';
import { DetailComponent } from './info/detail/detail.component';
import { AccueilComponent } from './accueil/accueil.component';
import { PanierState } from '../../shared/stats/panier-state';

@NgModule({
  declarations: [
    AppComponent,
    TetiereComponent,
    FooterComponent,
    DetailComponent,
    AccueilComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgxsModule.forRoot([
      PanierState
    ]),
    
  ],
  providers: [SwipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
