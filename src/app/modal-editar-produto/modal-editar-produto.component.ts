import { Component, Input, OnInit } from '@angular/core';
import { Produto, ProdutoService } from '../produto.service';
import { Update, UpdateService } from '../update.service';
import { Usuario, UsuarioService } from '../usuario.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-modal-editar-produto',
  templateUrl: './modal-editar-produto.component.html',
  styleUrls: ['./modal-editar-produto.component.css'],
  providers: [DatePipe],

})
export class ModalEditarProdutoComponent implements OnInit {
  constructor(private updateService: UpdateService, private produtoService: ProdutoService,
    private usuarioService: UsuarioService, private activeModal: NgbActiveModal, private datePipe: DatePipe) { }
  @Input()
  produto!: Produto;
  updates: any;
  usuario: Usuario = {
    id: 0,
    nome: '',
    email: '',
    senha: '',
    imagem: ''
  }
  ngOnInit(): void {
    this.updateService.getUpdates(this.produto.id).subscribe({
      next: this.handleGetUpgrade.bind(this)
    })
    this.usuario = this.usuarioService.getUsuarioLogado();

  }
  handleGetUpgrade(updates: Update) {
    updates.data = this.datePipe.transform(updates.data, 'dd/MM/yyyy HH:mm');
    this.updates = updates;
  }
  handleEditProduto() {
    this.produtoService.editarProduto(this.produto).subscribe({
      next: this.saveEditProduto.bind(this)
    })
  }
  saveEditProduto() {
    const produtoToUpdate: Update = {
      idProduto: this.produto.id,
      nome: this.usuario.nome,
      data: new Date(),
    }
    this.updateService.postUpdate(produtoToUpdate).subscribe({
      next: this.handleCloseModal.bind(this)
    })
  }
  handleCloseModal() {
    this.activeModal.close();

  }
  updateData(data: any) {
    return this.datePipe.transform(data, 'dd/MM/yyyy HH:mm');
  }
}
