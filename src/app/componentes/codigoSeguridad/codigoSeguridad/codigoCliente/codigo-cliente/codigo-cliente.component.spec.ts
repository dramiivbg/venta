import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodigoClienteComponent } from './codigo-cliente.component';

describe('CodigoClienteComponent', () => {
  let component: CodigoClienteComponent;
  let fixture: ComponentFixture<CodigoClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodigoClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodigoClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
