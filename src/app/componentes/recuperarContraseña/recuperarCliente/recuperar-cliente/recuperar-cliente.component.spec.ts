import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuperarClienteComponent } from './recuperar-cliente.component';

describe('RecuperarClienteComponent', () => {
  let component: RecuperarClienteComponent;
  let fixture: ComponentFixture<RecuperarClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecuperarClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecuperarClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
