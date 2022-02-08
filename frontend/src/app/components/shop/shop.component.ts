import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

products : any = [];
  constructor(private route : Router,private store : StoreService) { }

  addToCart(){
    this.route.navigateByUrl('product');
  }

  loadProducts(){
    this.store.getAllProducts().subscribe((res) =>{
      this.products = res;
      console.log(this.products);
    })
  }
  run(i){
    this.route.navigateByUrl(`product/id:${i}`);
  }
  ngOnInit(): void {
    this.loadProducts();
  }

}
