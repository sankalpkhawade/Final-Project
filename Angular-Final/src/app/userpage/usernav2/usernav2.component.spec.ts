import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Usernav2Component } from './usernav2.component';

describe('Usernav2Component', () => {
  let component: Usernav2Component;
  let fixture: ComponentFixture<Usernav2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Usernav2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Usernav2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
