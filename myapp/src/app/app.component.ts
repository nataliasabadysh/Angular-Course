//импортируются дополнительные модули, сервисы, компоненты и тд.
import { Component } from '@angular/core';


// Декораторы, описывают мето данные о компоненте
@Component({
  selector: 'app-root', // селектор под которым можно ичпользовать этот компонент
  templateUrl: './app.component.html', // шаблон для компонента
  styleUrls: ['./app.component.css'] //стили которые используються в этом компоненте
})

 // тело компоненты -  Class
export class AppComponent {
  title = 'My First Angular App';
  autor = 'Natalia';
}

