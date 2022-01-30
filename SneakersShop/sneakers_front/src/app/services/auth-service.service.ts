import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor() { }

  authUser(user: any)
  {
    let UserArray = [];
    if (localStorage.getItem('Users'))
    {
      UserArray = JSON.parse(localStorage.getItem('Users') as string);

    }

    return UserArray.find((p: { userName: any; userPass: any; }) => p.userName === user.userLogName && p.userPass === user.userLogPass);
  }
}
