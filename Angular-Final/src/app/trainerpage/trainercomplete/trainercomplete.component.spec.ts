import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainercompleteComponent } from './trainercomplete.component';

describe('TrainercompleteComponent', () => {
  let component: TrainercompleteComponent;
  let fixture: ComponentFixture<TrainercompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainercompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainercompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
