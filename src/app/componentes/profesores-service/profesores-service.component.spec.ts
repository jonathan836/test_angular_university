import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesoresServiceComponent } from './profesores-service.component';

describe('ProfesoresServiceComponent', () => {
  let component: ProfesoresServiceComponent;
  let fixture: ComponentFixture<ProfesoresServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfesoresServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfesoresServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
