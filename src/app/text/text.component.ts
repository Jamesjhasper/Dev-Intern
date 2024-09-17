import { Component } from '@angular/core';

@Component({
  selector: 'app-text',
  standalone: true,
  imports: [],
  templateUrl: './text.component.html',
  styleUrl: './text.component.css'
})
export class TextComponent {

hasTextShown: boolean = false;
setTextShown() {
  this.hasTextShown = true;
}

searchName() {
}
}
