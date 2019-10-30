import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  title = 'devweb2';

  formValidated: boolean = false;
  data: FormGroup;

  onFormValidated(data: FormGroup){
    this.data = data;
    this.formValidated = true;
}

}
