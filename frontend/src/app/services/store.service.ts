import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of, tap } from 'rxjs';
import { Product } from '../model/store.model';
import { LogsService } from './logs.service';
import { Cart } from '../model/cart.model';
import { User } from '../model/user.model';

const baseUrl ='http://10.10.2.5:5000/api'

@Injectable({
  providedIn: 'root'
})

export class StoreService {

  constructor(private http:HttpClient) { }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(baseUrl+'/maboneng');
  }
  getProduct(id: Number): Observable<Product> {
    return this.http.get<Product>(`${baseUrl+'/maboneng'}/${id}`)
    
  }
  addProduct(prod: any): Observable<Product> {
    this.http.post(baseUrl+'/maboneng',prod).subscribe((obj) =>{
      console.log(obj)
     });
    return this.http.post(baseUrl+'/maboneng',prod);
    
  }
  // Cart
  getAllCartItems() { 
    return this.http.get(baseUrl+"/cart");
  }
  getCartItem(id: any): Observable<any> {
    return this.http.get(`${baseUrl}/cart/${id}`);
    
  }
  postCartItem(Item : any): Observable<Cart> {
    this.http.post(baseUrl+'/cart',Item).subscribe((obj) =>{
      console.log(obj)
     });
    return this.http.post(baseUrl+'/cart',Item);
  }
  updateCartItem(id: Number,Item : Cart): Observable<Cart> {
    return this.http.put(`${baseUrl}/cart/${id}`,Item);
  }

  removeCartItem(id: Number): Observable<Cart> {
    this.http.delete(`${baseUrl}/cart/${id}`).subscribe((obj) =>{
      console.log(obj)
     });
    return this.http.delete(`${baseUrl}/cart/${id}`);
  }
  removeAllCartItem(): Observable<Cart> {
    return this.http.delete(`${baseUrl}/cart`);
  }
  // users
  getAllUsers() { 
    return this.http.get(baseUrl+"/user");
  }
  getUserById(id: Number): Observable<User> {
    return this.http.get(`${baseUrl}/user/${id}`);
    
  }
  postUser(user : User): Observable<User> {
    this.http.post(baseUrl+"/user",user).subscribe((obj) =>{
      console.log(obj)
     });
    return this.http.post(baseUrl+"/user",user);
  }
  updateUser(id: Number,user : User): Observable<User> {
    return this.http.put(`${baseUrl}/user/${id}`,user);
  }

  removeUser(id: Number): Observable<User> {
    return this.http.delete(`${baseUrl}/user/${id}`);
  }
  // removeAllCartItem(): Observable<Cart> {
  //   return this.http.delete(`${baseUrl}/cart`);
  // }
}
