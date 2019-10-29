import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxsModule } from '@ngxs/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TetiereComponent } from './tetiere/tetiere.component';
import { FooterComponent } from './footer/footer.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { RecapComponent } from './recap/recap.component';
import { PhoneNumberPipe } from './pipes/phone-number.pipe';
import { ErrorDirective } from './directives/error.directive';
import { ProduitsComponent } from './produits/produits.component';
import { FilterComponent } from './filter/filter.component';
import { SwipeService } from './services/swipe.service';
import { PanierComponent } from './panier/panier.component';
import { DetailComponent } from './detail/detail.component';
import { AccueilComponent } from './accueil/accueil.component';
import { RegisterComponent } from './register/register.component';
import { PanierState } from '../../shared/stats/panier-state';

@NgModule({
  declarations: [
    AppComponent,
    TetiereComponent,
    FooterComponent,
    FormulaireComponent,
    RecapComponent,
    PhoneNumberPipe,
    ErrorDirective,
    ProduitsComponent,
    FilterComponent,
    PanierComponent,
    DetailComponent,
    AccueilComponent,
    RegisterComponent
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
