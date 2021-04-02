import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioCuentasComponent } from './formulario-cuentas.component';

describe('FormularioCuentasComponent', () => {
  let component: FormularioCuentasComponent;
  let fixture: ComponentFixture<FormularioCuentasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioCuentasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioCuentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
