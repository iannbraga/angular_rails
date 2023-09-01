import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoListComponent } from './components/produto-list/produto-list.component';
import { ProdutoListCardComponent } from './components/produto-list-card/produto-list-card.component';

const routes: Routes = [
  { path: 'table', component: ProdutoListComponent },
  { path: 'card', component: ProdutoListCardComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutoRoutingModule { }
