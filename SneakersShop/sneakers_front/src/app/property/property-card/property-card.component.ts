import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { IProduct } from '../IProduct.interface';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.scss']
})
export class PropertyCardComponent implements OnInit {

  @Input() property!: IProduct;
  @Input() hideBtn!: boolean;

  constructor(private router: Router ) { }

  ngOnInit(): void {
  }
  seeDet()
  {
    this.router.navigate(['/product/{{property.Id}}']);
  }

}
