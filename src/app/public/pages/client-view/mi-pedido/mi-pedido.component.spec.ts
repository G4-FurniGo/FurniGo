import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiPedidoComponent } from './mi-pedido.component';

describe('MiPedidoComponent', () => {
  let component: MiPedidoComponent;
  let fixture: ComponentFixture<MiPedidoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MiPedidoComponent]
    });
    fixture = TestBed.createComponent(MiPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
