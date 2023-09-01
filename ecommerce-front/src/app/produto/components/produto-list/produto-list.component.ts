import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/model/produto';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.component.html',
  styleUrls: ['./produto-list.component.css']
})
export class ProdutoListComponent implements OnInit {

  tableColumns: string[] = ['id', 'url_image', 'titulo', 'descricao', 'valor', 'quantidade']
  produtos: Produto[] = []

  constructor(private produtoService: ProdutoService) {}

  ngOnInit(): void {
    this.produtoService.findAll().subscribe( data => {
      this.produtos = data
    })    
  }

}
