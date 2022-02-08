import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogsService {

  constructor() { }
  add(msg :string){
    console.log(msg);
  }
}
