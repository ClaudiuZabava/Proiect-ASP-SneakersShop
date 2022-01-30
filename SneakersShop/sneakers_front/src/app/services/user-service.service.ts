import { Injectable } from '@angular/core';
import { IUser } from '../model/myuser.interface';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor() { }

  addUsers(utilizator: IUser)
  {
    let users= [];
    if (localStorage.getItem('Users'))
    {
      users =JSON.parse(localStorage.getItem('Users') as string);
      users = [...users, utilizator];
    }
    else
    {
      users=[utilizator];
    }
    localStorage.setItem('Users', JSON.stringify(users));
  }

}
