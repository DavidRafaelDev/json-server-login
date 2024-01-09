import { Component, OnInit, inject } from '@angular/core';
import { Produto, ProdutoService } from '../produto.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalAdicionarProdutoComponent } from '../modal-adicionar-produto/modal-adicionar-produto.component';
import { ModalEditarProdutoComponent } from '../modal-editar-produto/modal-editar-produto.component';
import { Router } from '@angular/router';
import { Usuario, UsuarioService } from '../usuario.service';
import { ModalEditUsuarioComponent } from '../modal-edit-usuario/modal-edit-usuario.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private produtoService: ProdutoService, private route: Router, private usuarioService: UsuarioService) { }

  produtos: Produto[] = [];
  filtroNome: string = '';
  filtroAtacado: boolean = true;
  filtroVarejo: boolean = true;
  filtroInternacional: boolean = true;
  produtosFiltrados: Produto[] = []
  filtroSelect: string = "";
  usuario: Usuario = {
    id: 0,
    nome: '',
    email: '',
    senha: '',
    imagem: ''
  }
  private modalService = inject(NgbModal);

  ngOnInit(): void {
    this.getProdutos();
    this.usuario = this.usuarioService.getUsuarioLogado();
    if (this.usuario === undefined) {
      this.route.navigate([""]);
    }
  }

  getProdutos() {
    this.produtoService.getProdutos().subscribe({
      next: this.handleProdutos.bind(this)
    });
  }

  handleProdutos(data: Produto[]) {
    this.produtos = data;
    this.produtosFiltrados = this.produtos;

  }

  handleEdit(produto: Produto) {
    const modalRef = this.modalService.open(ModalEditarProdutoComponent, { size: 'lg' });
    modalRef.componentInstance.produto = produto;

    modalRef.result.then(() => {
      this.getProdutos();
    }).catch((reason) => {
      console.error('Modal fechado com erro:', reason);
    });
  }


  handleDelete(codigo: number) {
    this.produtoService.excluirProduto(codigo).subscribe({
      next: () => this.getProdutos()
    });
  }

  aplicarFiltros() {
    if (this.filtroNome.trim() !== '') {
      this.produtosFiltrados = this.produtos.filter((produto) =>
        produto.id.toString() == this.filtroNome
      );
    } else {
      this.getProdutos();
    }
    this.filtroSelect = ""
  }

  openModalAdicionarProduto() {
    const modalRef = this.modalService.open(ModalAdicionarProdutoComponent);
    modalRef.result.then(() => {
      this.getProdutos();
    }).catch((reason) => {
      console.error('Modal fechado com erro:', reason);
    });
  }

  aplicarSelectFiltro() {
    this.filtroNome = '';
    if (this.filtroSelect === 'todos') {
      this.getProdutos();
      return;
    }
    this.produtosFiltrados = this.produtos.filter((produto) =>
      produto.categoria === this.filtroSelect
    );
  }
  handleSair() {
    this.route.navigate([""]);
  }
  handleEditUsuario() {
    this.modalService.open(ModalEditUsuarioComponent, { size: 'lg' });
  }
  getImagemPath() {
    return this.usuario.imagem
  }
}
