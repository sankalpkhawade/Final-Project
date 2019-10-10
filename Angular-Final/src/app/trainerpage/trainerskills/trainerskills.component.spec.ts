import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerskillsComponent } from './trainerskills.component';

describe('TrainerskillsComponent', () => {
  let component: TrainerskillsComponent;
  let fixture: ComponentFixture<TrainerskillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainerskillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainerskillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
