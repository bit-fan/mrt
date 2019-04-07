import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StationBadgeComponent } from './station-badge.component';

describe('StationBadgeComponent', () => {
  let component: StationBadgeComponent;
  let fixture: ComponentFixture<StationBadgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StationBadgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StationBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
