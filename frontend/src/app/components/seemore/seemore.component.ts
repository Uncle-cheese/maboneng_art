import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seemore',
  templateUrl: './seemore.component.html',
  styleUrls: ['./seemore.component.css']
})
export class SeemoreComponent implements OnInit {

  products = [
  
    {
      id: Date.now(),
      name: "prod1",
      price:332,
      image: "assets/images/fhatuwan3.jpg",
    },
   
    {
      id: Date.now(),
      name: "prod2",
      price:332,
      image: "assets/images/fhatuwan4.jpg",
    },
    {
      id: Date.now(),
      name: "prod3",
      price:332,
      image: "assets/images/fhatuwan8.jpg",
    },
    {
      id: Date.now(),
      name: "prod4",
      price:332,
      image: "assets/images/bg-18.jpg",
    },
    {
      id: Date.now(),
      name: "prod1",
      price:332,
      image: "assets/images/bg-7.jpg",
    },
    {
      id: Date.now(),
      name: "prod1",
      price:332,
      image: "assets/images/bg-6.jpg",
    },
    {
      id: Date.now(),
      name: "prod1",
      price:332,
      image: "assets/images/bg-5.jpg",
    },
    {
      id: Date.now(),
      name: "prod1",
      price:332,
      image: "assets/images/bg-12.jpg",
    },
  
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
