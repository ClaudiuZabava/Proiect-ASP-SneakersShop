import { Component, OnInit } from '@angular/core';
import { SnkserviceService } from 'src/app/services/snkservice.service';
import { IProduct } from '../IProduct.interface';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss']
})
export class PropertyListComponent implements OnInit {

  Properties!:IProduct[];

    // Servicii. Afisarea / maparea de date din local storage in componenta prin servicii:
  constructor(private snkService: SnkserviceService) { }

  ngOnInit(): void {
    this.snkService.getAllSneakers().subscribe(
      data=>{
        this.Properties=data;


        // Se salveaza in localStorage , dar face override daca o folosim aici in acest mod:
        // const newProduct = JSON.parse(localStorage.getItem('newSnk') as string);
        // if(newProduct)
        // {
        //   this.Properties = [...this.Properties,newProduct];
        // }

      }

    );
    // ! Metoda fara Services:
    
    // this.http.get('data/properties.json').subscribe(
    //   data=>{
    //     this.Properties=data;
    //   }
    // )
  }

}
