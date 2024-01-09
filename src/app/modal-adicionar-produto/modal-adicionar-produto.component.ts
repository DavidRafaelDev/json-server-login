import { Component } from '@angular/core';
import { ProdutoService } from '../produto.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-adicionar-produto',
  templateUrl: './modal-adicionar-produto.component.html',
  styleUrls: ['./modal-adicionar-produto.component.css']
})
export class ModalAdicionarProdutoComponent {
  showErroAlert = false;
  novoProduto = { id: 0, nome: '', categoria: '' };
  constructor(private produtoService: ProdutoService, private activeModal: NgbActiveModal) { }

  handleCloseModal() {
    this.activeModal.close();

  }
  handleErrorModal() {
    this.showErroAlert = true;
  }
  adicionarProduto() {
    this.produtoService.adicionarProduto(this.novoProduto).subscribe(
      {
        next: this.handleCloseModal.bind(this),
        error: this.handleErrorModal.bind(this)
      }

    );
  }
}
