import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PanierComponent } from './cart/panier/panier.component';
import { DetailComponent } from './info/detail/detail.component';
import { AccueilComponent } from './accueil/accueil.component';


const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'detail', component: DetailComponent},
  { path: 'panier', component: PanierComponent },
  { path: 'customer-list', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },
  { path: 'catalogue-list', loadChildren: () => import('./catalogue/catalogue.module').then(m => m.CatalogueModule) },
  { path: 'info-list', loadChildren: () => import('./info/info.module').then(m => m.InfoModule) },
  { path: 'cart-list', loadChildren: () => import('./cart/cart.module').then(m => m.CartModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
