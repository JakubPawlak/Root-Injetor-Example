import { Component } from '@angular/core';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-own-scope-provider',
  templateUrl: './own-scope-provider.component.html',
  styleUrls: ['./own-scope-provider.component.scss'],
})
export class OwnScopeProviderComponent {
constructor(public service: SharedService) {
}
}
