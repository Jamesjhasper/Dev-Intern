import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';


//Define our Student interface
interface Form{
  name: string;
  age: number;
  city: string;

}
type form ={
  name: string;
  age: number;
  city: string;
}

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
@Input() channelName = "angular";
@Input() channelContent = "This is a video";
@Input() immag:string | undefined

num1!: number;
num2!: number;

result!: number;

//Creating a new Object for Student.
student: Form ={
  name: "John Doe",
  age: 25,
  city: "New York"
 
}

constructor() {
  console.log("THis is a card component");

}
addTwoNumbers(firstNumber: number, secondNumber: number) {
  this.result = firstNumber + secondNumber ;
}

}
