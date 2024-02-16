import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnScopeProviderComponent } from './own-scope-provider.component';

describe('OwnScopeProviderComponent', () => {
  let component: OwnScopeProviderComponent;
  let fixture: ComponentFixture<OwnScopeProviderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OwnScopeProviderComponent]
    });
    fixture = TestBed.createComponent(OwnScopeProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
