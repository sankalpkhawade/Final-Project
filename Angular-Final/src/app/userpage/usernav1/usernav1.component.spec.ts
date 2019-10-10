import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Usernav1Component } from './usernav1.component';

describe('Usernav1Component', () => {
  let component: Usernav1Component;
  let fixture: ComponentFixture<Usernav1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Usernav1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Usernav1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
