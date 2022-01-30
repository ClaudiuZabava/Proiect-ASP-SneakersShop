import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AlertServiceService } from './alert-service.service';
import { MiddlemanService } from './middleman.service';

@Injectable({
  providedIn: 'root'
})
export class CheckAuthGuard implements CanActivate {
  constructor(private userAlert: AlertServiceService,
              private middleman: MiddlemanService,
              private router: Router) { }

  canActivate()
  {
    if (this.middleman.currentStatus())
    {
      this.router.navigate(['/']);
      this.userAlert.errorf("You are already logged-in!");
      return false;
    }
    else
    {
      return true;
    }
  }
}

