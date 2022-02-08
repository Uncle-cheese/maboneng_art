import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Cart } from 'src/app/model/cart.model';
import { Product } from 'src/app/model/store.model';
import { StoreService } from 'src/app/services/store.service';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
 quantityForm: FormGroup;
products : Product;
product : any = [];
prod: [
  {
    // id: Date.now(),
    name: "prod1",
    price:332,
    image: "assets/images/fhatuwan3.jpg",
  },
 
  {
    // id: Date.now(),
    name: "prod2",
    price:332,
    image: "assets/images/fhatuwan4.jpg",
  },
  {
    // id: Date.now(),
    name: "prod3",
    price:332,
    image: "assets/images/fhatuwan8.jpg",
  },
  {
    // id: Date.now(),
    name: "prod4",
    price:332,
    image: "assets/images/bg-18.jpg",
  },
  


];


  constructor(private route: ActivatedRoute, private store:StoreService,
              private formBuilder: FormBuilder , private router : Router) { }


  productPage(){
     const id = Number(this.route.snapshot.paramMap.get('id'));
  
    console.log(id);
    this.store.getProduct(id)
      .subscribe((ress) => {
        this.products = ress;
        console.log(this.products); 

      })
  }
  addToCart(){
    let date = new Date();
    var cart = {
      product_id:null as number,
      name: null as string,
      user_id: null as number,
      shopping_session_id: null as number,
      quantity: null as number,
      price:null as number,
      created_at: null as Date,
      modified_at: null as Date
  };
  cart.modified_at =date;
  cart.created_at = date;
  cart.user_id =1;
  cart.shopping_session_id =1;
  cart.product_id=this.products.id;
  cart.quantity =90;
  cart.price =  this.products.price;
  cart.name = this.products.name;
    
    this.store.postCartItem(cart);
    alert(cart.name+' Item added to cart');
    this.router.navigateByUrl('cart')
  }
  ngOnInit(): void {
    this.productPage();
    this.loadProducts();
    this.quantityForm = this.formBuilder.group({
          quantity: '',
  });
}
run(){
  this.router.navigateByUrl('shop');
}
loadProducts(){
  this.store.getAllProducts().subscribe((res) =>{
    this.product = res;
    console.log(this.product);
  })
}
}
