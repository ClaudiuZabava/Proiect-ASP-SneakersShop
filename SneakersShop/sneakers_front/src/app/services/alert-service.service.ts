import { Injectable } from '@angular/core';
import * as alertyfy from 'alertifyjs';

@Injectable({
  providedIn: 'root'
})
export class AlertServiceService {

  constructor() { }

  successf(message: string)
  {
    alertyfy.success(message);
  }

  errorf(message: string)
  {
    alertyfy.error(message);
  }

  warningf(message: string)
  {
    alertyfy.warning(message);
  }

}
