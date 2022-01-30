import { CurrencyPipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { ProductClass } from 'src/app/model/ProductClass';
import { AlertServiceService } from 'src/app/services/alert-service.service';
import { SnkserviceService } from 'src/app/services/snkservice.service';
import { IProduct } from '../IProduct.interface';

@Component({
  selector: 'app-add-sneaker',
  templateUrl: './add-sneaker.component.html',
  styleUrls: ['./add-sneaker.component.scss']
})
export class AddSneakerComponent implements OnInit {

  @ViewChild('staticTabs') staticTabs?: TabsetComponent;

  listingForm!: FormGroup;
  productView: IProduct = {
    Id: null,
    Name: '',
    Type:'',
    Price: '' ,
    Image:''

  };

  product = new ProductClass();



  constructor(private currencyPipe: CurrencyPipe,
              private router: Router,
              private userAlert: AlertServiceService,
              private listService: SnkserviceService) {}

  ngOnInit(): void {
    this.listingForm = new FormGroup(
      {
        snkName: new FormControl(null, [Validators.required, Validators.maxLength(27)]),
        snkColor: new FormControl(null, [Validators.required, Validators.maxLength(14)]),
        snkPrice: new FormControl(null,  Validators.required),
        snkBrand: new FormControl(null, [Validators.required, Validators.maxLength(21)]),
        snkModel: new FormControl(null, [Validators.required, Validators.maxLength(21)]),
        snkDate: new FormControl(null, Validators.required),
        snkBuyLink: new FormControl(null, [Validators.required, Validators.minLength(5)])
      }
    );
    this.listingForm.valueChanges.subscribe( form=> {
      if(form.snkPrice)
      {
        this.listingForm.patchValue({
          snkPrice: this.currencyPipe.transform(form.snkPrice.replace(/\D/g,'').replace(/^0+/,''),'USD', 'symbol', '1.0-0' )
        }, {emitEvent: false})
      }
    });
  }
  onSub()
  {
    // console.log(this.listingForm);
    this.mapProduct();
    this.listService.listSneaker(this.product);
    this.router.navigate(['/buy-sneakers']);
    this.userAlert.successf("Product added successfuly!");
  }

  selectTab(tabId: number) 
  {
    if (this.staticTabs?.tabs[tabId]) {
      this.staticTabs.tabs[tabId].active = true;
    }
  }

  mapProduct(): void
  {
    this.product.Id = this.listService.getMyId();
    this.product.Name = this.snkName.value;
    this.product.Type = this.snkColor.value;
    this.product.Price = this.snkPrice.value;
    this.product.Brand = this.snkBrand.value;
    this.product.Model = this.snkModel.value;
    this.product.Date = this.snkDate.value;
    this.product.BuyLink = this.snkBuyLink.value;
    this.product.PostedOn = new Date().toString();
  }

  selectFile(event: Event) 
  {
    const target = event.target as HTMLInputElement;
    if (target.files && target.files.length > 0) 
    {
      this.product.Image = target.files[0].name;
      this.productView.Image = this.product.Image;
    }
  }



  // Getteri:
  get snkName()
  {
    return this.listingForm.get('snkName') as FormControl;
  }

  get snkColor()
  {
    return this.listingForm.get('snkColor') as FormControl;
  }

  get snkPrice()
  {
    return this.listingForm.get('snkPrice') as FormControl;
  }

  get snkBrand()
  {
    return this.listingForm.get('snkBrand') as FormControl;
  }

  get snkModel()
  {
    return this.listingForm.get('snkModel') as FormControl;
  }

  get snkDate()
  {
    return this.listingForm.get('snkDate') as FormControl;
  }

  get snkBuyLink()
  {
    return this.listingForm.get('snkBuyLink') as FormControl;
  }


}
