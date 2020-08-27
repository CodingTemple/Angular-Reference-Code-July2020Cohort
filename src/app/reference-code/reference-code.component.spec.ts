import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferenceCodeComponent } from './reference-code.component';

describe('ReferenceCodeComponent', () => {
  let component: ReferenceCodeComponent;
  let fixture: ComponentFixture<ReferenceCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferenceCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferenceCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
