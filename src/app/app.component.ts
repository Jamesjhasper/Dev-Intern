import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponent } from './first-component/first-component.component';
import { CardComponent } from './card/card.component';
import {FormsModule} from '@angular/forms';

//creating interface for dummyData.
interface dummyData {
  title: string;
  content: string;
  image: string;
  
}

type channelData ={
  title: string;
  content: string;
  image: string;
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,FirstComponent,CardComponent,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Dev-Intern';


  //Changing it to array of objects
  dummyData: dummyData[] = [
    {
      title: "card 1",
    content: "This is a card 1",
    image: "https://img-cdn.pixlr.com/image-generator/history/66cbadcbdc5d2f3ee54bdc6e/a41a42a2-6cfe-4ac8-abbe-4a33155fbe29/medium.webp",
    },
    {
      title: "card 2",
    content: "This is a card 2",
    image: "https://img-cdn.pixlr.com/image-generator/history/66cbacc1641a0fc320d91090/285f3480-b167-4ebd-ba4b-60ca5dd4fd4f/medium.webp",
    },
    {
      title: "card 3",
    content: "This is a card 3",
    image: "https://img-cdn.pixlr.com/image-generator/history/66cbcec0012f3fe215d07cba/66cbcec0012f3fe215d07cb6/medium.webp",
    },
    {
      title: "card 4",
    content: "This is a card 4",
    image: "https://img-cdn.pixlr.com/image-generator/history/66ccdec10ec9c04a01e5aa71/66ccdec10ec9c04a01e5aa6d/medium.webp",
    },
    {
      title: "card 5",
    content: "This is a card 5",
    image: "https://img-cdn.pixlr.com/image-generator/history/66cce0dadd900232a388c59b/66cce0dadd900232a388c597/medium.webp",
    }

  ]


}
