import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cart } from 'src/app/model/cart.model';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  // route: any;
  cartItems : any;
  constructor(private cart : StoreService,private route: ActivatedRoute) { }

  loadCartItems(){
    this.cart.getAllCartItems().subscribe((res) =>{
      this.cartItems = res;
      console.log(this.cartItems);
    })
  }
  getCartItem(){
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.cart.getCartItem(id).subscribe((res) =>{
      console.log(res);
    })
  }

  updateCartItem(item : Cart){
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.cart.updateCartItem(id, item).subscribe((res) =>{
      console.log(res);
    })
  }
  deleteCartItem(id : number){
    alert('Are you sure you want to remove this item?')
    this.cart.removeCartItem(id);
    location.reload();
  }
  deleteAllCartItem(){
    alert('Are you sure you want to clear your shopping cart?')
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.cart.removeAllCartItem().subscribe((res) =>{
      console.log(res);
    })
    location.reload();

  }

  ngOnInit(): void {
   this.loadCartItems();
  }

}
