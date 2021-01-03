import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodigoVendedorComponent } from './codigo-vendedor.component';

describe('CodigoVendedorComponent', () => {
  let component: CodigoVendedorComponent;
  let fixture: ComponentFixture<CodigoVendedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodigoVendedorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodigoVendedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
