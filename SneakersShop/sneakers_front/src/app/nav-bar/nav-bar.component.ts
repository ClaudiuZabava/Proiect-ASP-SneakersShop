import { Component, OnInit } from '@angular/core';
import { MiddlemanService } from '../services/middleman.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  loggedUserName!: string;
  
  constructor(private middleman: MiddlemanService) { }

  ngOnInit(): void {
  }

  loggedin()
  {
    this.loggedUserName =  localStorage.getItem('token') as string;
    this.middleman.checkLog();
    return this.middleman.currentStatus();
  }

  onLogOut()
  {
    localStorage.removeItem('token');
    this.middleman.checkLog();

  }

}
