import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { IUser } from 'src/app/model/myuser.interface';
import { UserServiceService } from 'src/app/services/user-service.service';
import { AlertServiceService } from 'src/app/services/alert-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {

  registerForm!: FormGroup;
  utilizator!: IUser;
  badSubmit!: boolean;

  constructor(private userService: UserServiceService, 
              private userAlert: AlertServiceService,
              private router: Router) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup(
      {
        userName: new FormControl(null,Validators.required),
        userEmail: new FormControl(null,[Validators.required,Validators.email]),
        userPass: new FormControl(null,[Validators.minLength(8),Validators.required,
          Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')]),
        userConfirmPass: new FormControl(null,Validators.required),
        userMobile: new FormControl(null,[Validators.maxLength(10),Validators.required, Validators.pattern("^[0-9]*$")])
      }, this.passMatchingValidator
    );
  }


  // Validator custom: verificam ca doua campuri din form sa aibe aceeasi valoare.
  passMatchingValidator(fc: AbstractControl): ValidationErrors | null {
    return fc.get('userPass')?.value === fc.get('userConfirmPass')?.value ? null :
      { notmatched: true }
  };

  onRegSub()
  {
    //console.log(this.registerForm);
    this.badSubmit = true;
    if(this.registerForm.valid)
    {
      this.badSubmit = false;
      // this.utilizator = Object.assign(this.utilizator, this.registerForm.value); -- ne folosim de interfata acum.
      // Frem sa salvam anumite date ( ex: nu ne trebuie si inputul din confirm pass)
      this.userService.addUsers(this.userMap());
      this.registerForm.reset();
      this.router.navigate(['/user-login']);
      this.userAlert.successf("Registration Completed!")
    }
    else
    {
      this.userAlert.errorf("Requested fields are empty or incorrect!")
    }
  }

  userMap():IUser
  {
    return this.utilizator = {
      userName: this.userName.value,
      userEmail: this.userEmail.value,
      userPass: this.userPass.value,
      userMobile: this.userMobile.value
    // ^ din interfata;   ^ astea sunt metodele get()
    }
  }



  // Getteri folositi in .html:
  get userName(){
    return this.registerForm.get('userName') as FormControl;
  }

  get userEmail(){
    return this.registerForm.get('userEmail') as FormControl;
  }

  get userPass(){
    return this.registerForm.get('userPass') as FormControl;
  }

  get userConfirmPass(){
    return this.registerForm.get('userConfirmPass') as FormControl;
  }

  get userMobile(){
    return this.registerForm.get('userMobile') as FormControl;
  }


}
