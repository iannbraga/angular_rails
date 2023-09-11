import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoListComponent } from './components/produto-list/produto-list.component';
import { ProdutoListCardComponent } from './components/produto-list-card/produto-list-card.component';
import { ProdutoFormComponent } from './components/produto-form/produto-form.component';
import { produtoResolver } from './resolver/produto.resolver';

const routes: Routes = [
  { path: '', component: ProdutoListComponent },
  { path: 'table', component: ProdutoListComponent },
  { path: 'card', component: ProdutoListCardComponent },
  { path: 'new', component: ProdutoFormComponent },
  { path: 'edit/:id', component: ProdutoFormComponent, resolve: { produto: produtoResolver } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutoRoutingModule { }
