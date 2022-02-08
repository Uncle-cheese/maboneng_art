import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { StoreService } from 'src/app/services/store.service';
import { User } from '../../model/user.model';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  register : FormGroup;

  get userfName(){
    return this.register.get('FirstName')
  }
  get userlName(){
    return this.register.get('LastName')
  }
  get userPhone(){
    return this.register.get('phone')
  }
  get userEmail(){
    return this.register.get('email')
  }
  get userPassword(){
    return this.register.get('password')
  }


  constructor(private fb: FormBuilder,private route: Router,private store : StoreService) {}

  ngOnInit(): void {
    this.register = this.fb.group({
      FirstName: ['', Validators.compose([Validators.pattern('[a-zA-Z ]*'),Validators.minLength(3),Validators.required])],
      LastName: ['', Validators.compose([Validators.pattern('[a-zA-Z ]*'),Validators.minLength(3),Validators.required])],
      phone: ['', Validators.compose([Validators.pattern('[a-zA-Z ]*'),Validators.minLength(10), Validators.required])],
      email: ['', Validators.compose([Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'), Validators.required])],
      password: ['', Validators.compose([Validators.minLength(6), Validators.maxLength(20), Validators.required])]
      // cpass: ['', Validators.compose([Validators.minLength(6), Validators.maxLength(20), Validators.required])],   Validators.compose([Validators.pattern('[a-zA-Z ]*'),Validators.minLength(3), Validators.required])
    });
    // ,
    // {
    //   validator : this.checkPass('password','cpass')
    // }
  }
  registerU(obj){
    console.log(obj)
    this.store.postUser(obj);
  }
  checkPass(val :string,val1:string) {
    if(val==val1){
      console.log('Correct')
      return true;
    }
    else{
      
      console.log('Incorrect')
      return false;
    }
  }
  login() {
    this.route.navigateByUrl('login')
  }
  onSubmit() {
    let date = new Date();
    var user = {
      modified_at: null as Date,
      username: null as string,
      email:  null as string,
      lastname:  null as string,
      firstname:  null as string,
      gender:  null as string,
      initials:  null as string,
      password:  null as string,
      phone:  null as number,
      photourl:null as string, //"https://i.ibb.co/xsKXLYN/bg-3.jpg",
      roleid:null as number,
      last_login:null as Date,
      created_at: null as Date,
      profilecomplete: null as boolean,
      active: null as boolean,
  };

  user.modified_at =date;
  user.created_at = date;
  // user.active =false;
  // user.profilecomplete = false;
  user.last_login = date;
  user.roleid = 1;
  user.photourl = "https://i.ibb.co/xsKXLYN/bg-3.jpg";
  user.username = this.register.value.email;
  user.initials = this.register.value.FirstName.charAt(0)+this.register.value.LastName.charAt(0);
  user.phone = this.register.value.phone;
  user.password   = this.register.value.password;
  user.firstname = this.register.value.FirstName;
  user.lastname = this.register.value.Lastname;
  user.gender =  "N/A"
  user.email = this.register.value.email;

    if(this.register.valid){
    console.log(user);
   this.registerU(user);
    // this.route.navigateByUrl('login')z
  }
  else{
alert('Please fill all fields');
  }
}
}