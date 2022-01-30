import { Component, OnInit } from '@angular/core';
import { SlicePipe } from '@angular/common';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ProductClass } from 'src/app/model/ProductClass';
import { SnkserviceService } from 'src/app/services/snkservice.service';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.scss']
})
export class PropertyDetailsComponent implements OnInit {

  // Rute cu parametru.

  public productId!: number;
  product= new ProductClass();
  constructor(private route: ActivatedRoute,
              private router: Router,
              private getSnk: SnkserviceService) { }

  ngOnInit(): void {
    this.productId = Number(this.route.snapshot.params['id'])

    // acelasi lucru ca mai sus, dar pt routerLink:
    this.route.params.subscribe(
      (params) => {
        this.productId = Number(params['id']);
        this.getSnk.getProduct(this.productId).subscribe(
          data => {
            this.product.Name = data!.Name;
            this.product.Type = data!.Type;
            this.product.Price = data!.Price;
            this.product.Image = data!.Image;
            this.product.Brand = data!.Brand;
            this.product.Model = data!.Model;
            this.product.Date = data!.Date;
            this.product.BuyLink = data!.BuyLink;
          }
        )
      }
    )

  }

  goToBuy()
  {
    window.location.href = this.product.BuyLink;
  }



  // seeNext()
  // {
  //   this.productId +=1;
  //   this.router.navigate(['product/', this.productId])
  // }

}
