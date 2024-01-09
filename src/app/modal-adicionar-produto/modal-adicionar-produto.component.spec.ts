import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAdicionarProdutoComponent } from './modal-adicionar-produto.component';

describe('ModalAdicionarProdutoComponent', () => {
  let component: ModalAdicionarProdutoComponent;
  let fixture: ComponentFixture<ModalAdicionarProdutoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalAdicionarProdutoComponent]
    });
    fixture = TestBed.createComponent(ModalAdicionarProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
