import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditarProdutoComponent } from './modal-editar-produto.component';

describe('ModalEditarProdutoComponent', () => {
  let component: ModalEditarProdutoComponent;
  let fixture: ComponentFixture<ModalEditarProdutoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalEditarProdutoComponent]
    });
    fixture = TestBed.createComponent(ModalEditarProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
