import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsercompleteComponent } from './usercomplete.component';

describe('UsercompleteComponent', () => {
  let component: UsercompleteComponent;
  let fixture: ComponentFixture<UsercompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsercompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsercompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
