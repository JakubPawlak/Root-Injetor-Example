import { effect, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  state = signal({
    lastChangeBy: 'none',
    value: 0
  });

  constructor() {
    effect(() => {
      console.log('new state', this.state())
    })
  }

  add(lastChangeCaller: string) {
    console.log(lastChangeCaller)
    this.state.update(v => ({
      lastChangeBy: lastChangeCaller,
      value: v.value + 1
    }));
  }

}
