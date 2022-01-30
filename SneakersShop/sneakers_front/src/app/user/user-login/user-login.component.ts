import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertServiceService } from 'src/app/services/alert-service.service';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { MiddlemanService } from 'src/app/services/middleman.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  loginForm!: FormGroup;
  badLogin!: boolean;
  constructor(private userAlert: AlertServiceService, 
              private authService: AuthServiceService,
              private middleman: MiddlemanService,
              private router: Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup(
      {
        userLogName: new FormControl(null,Validators.required),
        userLogPass: new FormControl(null,Validators.required)
      }
    );
  }

  onLogIn()
  {
    console.log(this.loginForm);
    // Simulam un user authentication token, intrucat inca nu avem partea de backend.
    const userToken = this.authService.authUser(this.loginForm.value);
    if(userToken)
    {
      localStorage.setItem('token',userToken.userName);
      this.middleman.checkLog();
      this.router.navigate(['/']);
      this.userAlert.successf("Logged-In Successfully !");
    }
    else
    {
      this.userAlert.errorf("Wrong Name and/or Password !");
    }

    // this.badLogin = true;
    // if(this.loginForm.valid)
    // {
    //   this.badLogin = false;
    //   // Frem sa salvam anumite date ( ex: nu ne trebuie si inputul din confirm pass)
    //   this.loginForm.reset();
    // }
    // else
    // {
    //   this.userAlert.errorf("Wrong Name and/or Password!")
    // }
  }

  // Getteri:

  get userLogName(){
    return this.loginForm.get('userLogName') as FormControl;
  }

  get userLogPass(){
    return this.loginForm.get('userLogPass') as FormControl;
  }

}
