import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  brand: string = "Tourradar";
  autor: string = "Natalia Sabadysh";
  constructor() { }

  ngOnInit() {
  }

}
