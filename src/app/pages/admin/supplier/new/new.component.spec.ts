import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSupplierComponent } from './new.component';

describe('NewComponent', () => {
  let component: NewSupplierComponent;
  let fixture: ComponentFixture<NewSupplierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewSupplierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
