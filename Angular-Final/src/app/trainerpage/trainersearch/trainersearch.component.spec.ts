import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainersearchComponent } from './trainersearch.component';

describe('TrainersearchComponent', () => {
  let component: TrainersearchComponent;
  let fixture: ComponentFixture<TrainersearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainersearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainersearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
