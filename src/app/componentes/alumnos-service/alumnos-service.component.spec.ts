import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnosServiceComponent } from './alumnos-service.component';

describe('AlumnosServiceComponent', () => {
  let component: AlumnosServiceComponent;
  let fixture: ComponentFixture<AlumnosServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlumnosServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnosServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
