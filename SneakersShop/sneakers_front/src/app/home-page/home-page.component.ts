import { Component, OnInit } from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router'

@Component({
  selector: 'ngbd-carousel-basic',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  images = ["assets/images/snkk.png","assets/images/rl5.png" ,"assets/images/rl4.png"];

  constructor(private router: Router ) { }

  ngOnInit(): void {
  }

  goBuy()
  {
    this.router.navigate(['/buy-sneakers']);
  }

  goSell()
  {
    this.router.navigate(['/add-sneakers']);
  }

  goLog()
  {
    this.router.navigate(['/user-login']);
  }

}
