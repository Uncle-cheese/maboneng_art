import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  hi:any = localStorage.getItem('size');
  cartItems :any;
  num = 0;
  constructor(private cart : StoreService) { }

  ngOnInit(): void {
    this.loadCartItems();
  }
  loadCartItems(){
    this.cart.getAllCartItems().subscribe((res) =>{
      this.cartItems = res;
      this.num  = this.cartItems.length;
    })
    console.log(this.num);
  }
  navbarCollapsed = true;
  toggleNavbarCollapsing() {
    this.navbarCollapsed = !this.navbarCollapsed;
  }
  
}
