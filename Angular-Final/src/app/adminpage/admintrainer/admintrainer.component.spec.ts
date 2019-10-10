import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmintrainerComponent } from './admintrainer.component';

describe('AdmintrainerComponent', () => {
  let component: AdmintrainerComponent;
  let fixture: ComponentFixture<AdmintrainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmintrainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmintrainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
