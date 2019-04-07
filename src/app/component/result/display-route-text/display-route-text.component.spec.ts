import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayRouteTextComponent } from './display-route-text.component';

describe('DisplayRouteTextComponent', () => {
  let component: DisplayRouteTextComponent;
  let fixture: ComponentFixture<DisplayRouteTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayRouteTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayRouteTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
