import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor() { }
  posts : any[] = [
    {
       title: "News-1, Are papers textured on both sides?",
        text: "This means one side has prominent texture and the other side has remnants of that texture",
        id : 1,
    },
    {
      title: "News-2, Are papers textured on both sides?",
      text: "This means one side has prominent texture and the other side has remnants of that texture",
      id : 2,
    },
    {
      title: "News-3, Are papers textured on both sides?",
      text: "This means one side has prominent texture and the other side has remnants of that texture",
      id : 3,
    },
    {
      title: "News-4, Are papers textured on both sides?",
      text: "This means one side has prominent texture and the other side has remnants of that texture",
      id : 4,
    },
    {
      title: "News-5, Are papers textured on both sides?",
      text: "This means one side has prominent texture and the other side has remnants of that texture",
      id : 5,
    },
    {
      title: "News-6, Are papers textured on both sides?",
      text: "This means one side has prominent texture and the other side has remnants of that texture",
      id : 6,
    },
    {
      title: "News-7, Are papers textured on both sides?",
      text: "This means one side has prominent texture and the other side has remnants of that texture",
      id : 7,
    },

  ];
  infoIsShow : boolean = false;


  ngOnInit() {
  }
  toggleInfoBlock (){
    this.infoIsShow = !this.infoIsShow;
  }
}
