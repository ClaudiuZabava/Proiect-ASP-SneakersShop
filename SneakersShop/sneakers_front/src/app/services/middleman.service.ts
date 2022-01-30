import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

// comunicam intre componente prin functia checkLog() si currentStatus() a acestui serviciu.

export class MiddlemanService {

  isLogged!: boolean;
  loggedUser!: string;
  constructor() { }

  checkLog()
  {
    this.loggedUser = localStorage.getItem('token') as string;
    if(this.loggedUser)
    {
      this.isLogged=true;
    }
    else
    {
      this.isLogged=false;
    }
  }

  currentStatus()
  {
    return this.isLogged;
  }

}
