import { Component } from '@angular/core';
import { CardData } from './home.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  cardItems: CardData[] = [
    {
      imageUrl: 'assets/hero-mobile-tablet.png',
      title: 'Vue melhor framework',
      description: 'Vue é o melhor',
      buttonLink: 'https://vuejs.org/guide/introduction.html',
      buttonText: 'Estudar Vue',
    },
    {
      imageUrl: 'assets/hero-mobile-tablet.png',
      title: 'Angular melhor framework',
      description: 'Angular é o melhor',
      buttonLink: 'https://angular.io/docs',
      buttonText: 'Estudar Angular',
    },
    {
      imageUrl: 'assets/hero-mobile-tablet.png',
      title: 'React melhor framework',
      description: 'React é o melhor',
      buttonLink: 'https://reactjs.org/docs/getting-started.html',
      buttonText: 'Estudar React',
    },
  ];
}
