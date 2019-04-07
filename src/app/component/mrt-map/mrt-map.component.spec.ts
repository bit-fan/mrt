import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MrtMapComponent } from './mrt-map.component';

describe('MrtMapComponent', () => {
  let component: MrtMapComponent;
  let fixture: ComponentFixture<MrtMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MrtMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MrtMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
