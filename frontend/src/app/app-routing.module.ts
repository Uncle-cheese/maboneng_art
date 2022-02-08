import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ShopComponent } from './components/shop/shop.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ContactComponent } from './components/contact/contact.component';
import { CartComponent } from './components/cart/cart.component';
import { OurstoryComponent } from './components/ourstory/ourstory.component';
import { RegistrationComponent } from './components/registration/registration.component';

import { LoginComponent } from './components/login/login.component';
import { ProductComponent } from './components/product/product.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { SeemoreComponent } from './components/seemore/seemore.component';
import { MystoryComponent } from './components/mystory/mystory.component';
import { AddProductComponent } from './components/add-product/add-product.component';

const routes: Routes = [
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',component:HomeComponent},
    {path:'shop',component:ShopComponent},
    {path:'ourstory',component:OurstoryComponent},
    {path:'gallery',component:GalleryComponent},
    {path:'contact',component:ContactComponent},
    {path:'cart',component:CartComponent},
    {path:'registration',component:RegistrationComponent},
    {path:'OurStory',component:OurstoryComponent},
    {path:'mystory',component:MystoryComponent},
    {path:'Gallery',component:GalleryComponent},
    {path:'Contact',component:ContactComponent},
    {path:'Cart',component:CartComponent},
    {path:'login',component:LoginComponent},
    {path:'product/:id',component:ProductComponent},
    {path:'checkout',component:CheckoutComponent},
    {path:'seemore',component:SeemoreComponent},
    {path:'add-product',component:AddProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
