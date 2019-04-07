import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StationNumBadgeComponent } from './station-num-badge.component';

describe('StationNumBadgeComponent', () => {
  let component: StationNumBadgeComponent;
  let fixture: ComponentFixture<StationNumBadgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StationNumBadgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StationNumBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
