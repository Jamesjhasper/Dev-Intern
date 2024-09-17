import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface userForm {
  name:string;
  email:string;
  password:string;
  confirmPassword:string;
  DOB:Date;
  age:number;
  number:string;
  maleOrFemale:string;
  reasonForRegistering:string;
}

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  userRegistrationForm: userForm = {
    name:"",
    email:"",
    password:"",
    confirmPassword:"",
    DOB:new Date(),
    age:0,
    number:"",
    maleOrFemale:"",
    reasonForRegistering:"",
  }

  submitInfo(){
console.log('This is what the user has typed', this.userRegistrationForm)
  }
  }

