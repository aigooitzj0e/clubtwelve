import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditjerseyComponent } from './editjersey.component';

describe('EditjerseyComponent', () => {
  let component: EditjerseyComponent;
  let fixture: ComponentFixture<EditjerseyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditjerseyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditjerseyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
