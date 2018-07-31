import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  title: string = 'Travel & More';

  getUserReview : boolean = false;

  cards: any[] =[
    {
    name: "New Zealand",
    price: "100",
    info: "Awesome trip, awesome guides and awesome vehicle. Met some great people on the tour... ",
    review: [
      {
        userName: "Denis",
        text: "Some review text"
      }
    ]
  },
    {
      name: "Ukraine",
      price: "$200",
      info: "Awesome trip, awesome guides and awesome vehicle. Met some great people on the tour... ",
      review: [
        {
          userName: "Ivan",
          text: "Some review text"
        },
        {
          userName: "Maks",
          text: "Some review text"
        }
      ]
    }
    ];

  constructor() { }

  ngOnInit() {
  }

  // method
  toggleInfoRev (){
    this.getUserReview = !this.getUserReview;
  }

}
