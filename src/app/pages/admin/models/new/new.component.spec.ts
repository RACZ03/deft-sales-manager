import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewModelComponent } from './new.component';

describe('NewComponent', () => {
  let component: NewModelComponent;
  let fixture: ComponentFixture<NewModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewModelComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
