import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ProductClass } from '../model/ProductClass';
import { IProductDets } from '../model/IProductDets.interface';

@Injectable({
  providedIn: 'root'
})
export class SnkserviceService {

  // Http requests pentru  Services:
  constructor(private http:HttpClient) { }

  getAllSneakers(): Observable<IProductDets[]>{
    // Implementare folosind pipe: Transformam raspunsul HTTP cu PIPE pentru tipul definit in interfata IProduct.
    return this.http.get('data/properties.json').pipe(
      map( data =>{

        const PropertiesArray: Array<IProductDets> = [];
        const localProds = JSON.parse(localStorage.getItem('newSnk') as string);
        if (localProds)
        {
          for (const id in localProds)
          {
            if (localProds.hasOwnProperty(id))
            {
              PropertiesArray.push(localProds[id]);
            }
          }
        }
        for (const id in data){
          if (data.hasOwnProperty(id))
          {
            PropertiesArray.push(data[id]);
          }
        }
        return PropertiesArray;

      })
    );
  }
  listSneaker(product: ProductClass)
  {
    let newProd = [product];
    
    // Adaugam sneaker nou daca key-ul nu exista in localStorage
    if(localStorage.getItem('newSnk'))
    {
      newProd = [...JSON.parse(localStorage.getItem('newSnk') as string), product]
    }

      localStorage.setItem('newSnk', JSON.stringify(newProd));


  }

  getMyId()
  {
    if(localStorage.getItem('SNKID'))
    {
      localStorage.setItem('SNKID', String(Number(localStorage.getItem('SNKID'))+1));
      return Number(localStorage.getItem('SNKID'));
    }
    else
    {
      localStorage.setItem('SNKID','7');
      return Number(localStorage.getItem('SNKID'));
    }
  }

  // exemplu pipe folosit pentru a mappa informatiile ( map - data):
  getProduct(id: number)
  {
    return this.getAllSneakers().pipe(
      map(prodArray => {
        return prodArray.find( p => p.Id === id);
      })
    );
  }
}
