import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuperarVendedorComponent } from './recuperar-vendedor.component';

describe('RecuperarVendedorComponent', () => {
  let component: RecuperarVendedorComponent;
  let fixture: ComponentFixture<RecuperarVendedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecuperarVendedorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecuperarVendedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
