import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRiverComponent } from './create-river.component';

describe('CreateRiverComponent', () => {
  let component: CreateRiverComponent;
  let fixture: ComponentFixture<CreateRiverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateRiverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRiverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
