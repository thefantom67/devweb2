import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { RecapComponent } from './recap/recap.component';
import { PhoneNumberPipe } from './pipes/phone-number.pipe';
import { ErrorDirective } from './directives/error.directive';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [CustomersComponent,
    FormulaireComponent,
    RecapComponent,
    PhoneNumberPipe,
    ErrorDirective,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CustomersModule { }
