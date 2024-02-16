import { Component } from '@angular/core';
import { AccessorService } from './accessor.service';
import { SharedService } from './shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-playground';
  constructor(public service: SharedService, accessorService: AccessorService) {
  }
}
