import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LazyComponent } from './lazy.component';
import { OwnScopeProviderComponent } from './own-scope-provider/own-scope-provider.component';

@NgModule({
  declarations: [
    LazyComponent,
    OwnScopeProviderComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: LazyComponent
      },
      {
        path: 'own-scope',
        component: OwnScopeProviderComponent
      }
    ])
  ]
})
export class LazyModule {
}
