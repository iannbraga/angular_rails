import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/app/model/produto';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.css']
})
export class ProdutoFormComponent {
  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private produtoService: ProdutoService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {

    const produto: Produto = this.activatedRoute.snapshot.data['produto'];

    this.formGroup = formBuilder.group({
      id: [(produto && produto.id) ? produto.id : null],
      nome: [(produto && produto.nome) ? produto.nome : '', Validators.required],
      marca: [(produto && produto.marca) ? produto.marca : '', Validators.required],
      tipo: [(produto && produto.tipo) ? produto.tipo : '', Validators.required],
      valor: [(produto && produto.valor) ? produto.valor : 0, Validators.required],
      quantidade: [(produto && produto.quantidade) ? produto.quantidade : 0, Validators.required],
      url_image: [(produto && produto.url_image) ? produto.url_image : 0, Validators.required]
    })
  }

  salvar() {
    if (this.formGroup.valid) {
      const produto = this.formGroup.value;
      if (produto.id == null) {
        this.produtoService.save(produto).subscribe({
          next: (produtoCadastrado) => {
            this.router.navigateByUrl('/table');
          },
          error: (err) => {
            console.log('Erro ao incluir' + JSON.stringify(err));
          }
        });
      } else {
        this.produtoService.update(produto).subscribe({
          next: (produtoCadastrado) => {
            this.router.navigateByUrl('/table');
          },
          error: (err) => {
            console.log('Erro ao alterar' + JSON.stringify(err));
          }
        });
      }
    }
  }

  excluir() {
    const produto = this.formGroup.value;
    if (produto.id != null) {
      this.produtoService.delete(produto).subscribe({
        next: (e) => {
          this.router.navigateByUrl('/table');
        },
        error: (err) => {
          console.log('Erro ao excluir' + JSON.stringify(err));
        }
      });
    }
  }

}
