import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AlertServiceService } from './alert-service.service';
import { MiddlemanService } from './middleman.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {

  constructor(private userAlert: AlertServiceService,
              private middleman: MiddlemanService,
              private router: Router) { }

  canActivate()
  {
    if (this.middleman.currentStatus())
    {
      return true;
    }
    else
    {
      this.router.navigate(['/user-login']);
      this.userAlert.errorf("You need to Login first to access that page!");
      return false;
    }
  }
}
