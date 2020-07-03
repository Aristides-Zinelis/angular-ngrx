import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HydroComponent } from './hydro.component';

describe('HydroComponent', () => {
  let component: HydroComponent;
  let fixture: ComponentFixture<HydroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HydroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HydroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
