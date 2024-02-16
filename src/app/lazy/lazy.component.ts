import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-lazy',
  templateUrl: './lazy.component.html',
  styleUrls: ['./lazy.component.scss']
})
export class LazyComponent {
constructor(public service: SharedService) {
}
}
