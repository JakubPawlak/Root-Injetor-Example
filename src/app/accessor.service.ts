import { effect, Injectable } from '@angular/core';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root'
})
export class AccessorService {

  constructor(service: SharedService) {
    console.log('AccessorService created')
    effect(() => {
      console.log('accessor new state', service.state())
    })
  }
}
