import { Component, Input, OnInit } from '@angular/core';
import { Produto } from 'src/app/model/produto';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-produto-list-card',
  templateUrl: './produto-list-card.component.html',
  styleUrls: ['./produto-list-card.component.css']
})
export class ProdutoListCardComponent implements OnInit{

  produtos: Produto[] = []

  constructor(private produtoService: ProdutoService) {}

  ngOnInit(): void {
    this.produtoService.findAll().subscribe( data => {
      this.produtos = data
    })    
  }

}
