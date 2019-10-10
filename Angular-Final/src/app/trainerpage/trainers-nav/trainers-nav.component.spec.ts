import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainersNavComponent } from './trainers-nav.component';

describe('TrainersNavComponent', () => {
  let component: TrainersNavComponent;
  let fixture: ComponentFixture<TrainersNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainersNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainersNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
