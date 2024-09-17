import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule,],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {
  userForm = new FormGroup({
    firstName: new FormControl(""),
    lastName: new FormControl(""),
    email: new FormControl(""),
    password: new FormControl(""),
    confirmPassword: new FormControl(""),
    number: new FormControl(""),
    maleOrFemale: new FormControl(""),
    reasonForRegistering: new FormControl(""),
  })
  number = new FormControl("")

  updateNumber(){
    this.number.setValue("123456789");
    console.log(this.userForm.value);
  }
}
