import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  products = [
    {
      id: Date.now(),
      name: "prod1",
      image: "assets/images/img1.jpg",
    },
    {
      id: Date.now(),
      name: "prod1",
      image: "assets/images/img1.jpg",
    },
    {
      id: Date.now(),
      name: "prod1",
      image: "assets/images/img1.jpg",
    },
    {
      id: Date.now(),
      name: "prod1",
      image: "assets/images/img1.jpg",
    },
    {
      id: Date.now(),
      name: "prod1",
      image: "assets/images/img1.jpg",
    },
    {
      id: Date.now(),
      name: "prod1",
      image: "assets/images/img1.jpg",
    },
    {
      id: Date.now(),
      name: "prod1",
      image: "assets/images/img1.jpg",
    },
    {
      id: Date.now(),
      name: "prod1",
      image: "assets/images/img2.jpg",
    },
    {
      id: Date.now(),
      name: "prod1",
      image: "assets/images/img2.jpg",
    },
    {
      id: Date.now(),
      name: "prod1",
      image: "assets/images/img2.jpg",
    },
    {
      id: Date.now(),
      name: "prod1",
      image: "assets/images/img2.jpg",
    },
    {
      id: Date.now(),
      name: "prod1",
      image: "assets/images/img2.jpg",
    },
  ];

  title = 'ng-carousel-demo';
   
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
    
  slides = [
    {id: 1, img: "https://res.cloudinary.com/dxfq3iotg/image/upload/v1557204140/banner_12.jpg"},
    {id: 2, img: "https://res.cloudinary.com/dxfq3iotg/image/upload/v1557204140/banner_12.jpg"},
    {id: 3, img: "https://res.cloudinary.com/dxfq3iotg/image/upload/v1557204140/banner_12.jpg"},
    {id: 4, img: "assets/images/bg-1.jpg"},
    {id: 5, img: "assets/images/bg-2.jpg"},
    {id: 6, img: "assets/images/bg-3.jpg"},
    {id: 6, img: "assets/images/bg-4.jpg"}
  ];
  constructor(private route : Router) { }

  addToCart(){
    this.route.navigateByUrl('AddToCart');
  }
  ngOnInit(): void {
  }


    

}
