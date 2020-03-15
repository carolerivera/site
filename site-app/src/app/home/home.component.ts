import { Component } from '@angular/core';

class Image {
  constructor(
    public src: string,
    public alt: string,
    public caption: string,
    public url: string
  ) {

  }
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public images: Image[] = [
    new Image('/assets/images/Kirkjufell.jpg', 'Kirkjufell, Iceland', 'Travel', '/blogs/travel'),
    new Image('/assets/images/Kirkjufell.jpg', 'Kirkjufell, Iceland', 'Programming', '/blogs/programming'),
    new Image('/assets/images/Kirkjufell.jpg', 'Kirkjufell, Iceland', 'Books', '/blogs/books'),
    new Image('/assets/images/Kirkjufell.jpg', 'Kirkjufell, Iceland', 'Travel', '/blogs/travel')
  ];

  constructor() { }

  public getImageClass(index: number): string {
    switch (index){
      case 0: return "top left";
      case 1: return "top right";
      case 2: return "bottom left";
      case 3: return "bottom right";
    }
  }
}