import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Section3CopyComponent } from './section3-copy.component';

describe('Section3CopyComponent', () => {
  let component: Section3CopyComponent;
  let fixture: ComponentFixture<Section3CopyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Section3CopyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Section3CopyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
