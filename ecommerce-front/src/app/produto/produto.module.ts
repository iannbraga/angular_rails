import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutoRoutingModule } from './produto-routing.module';
import { ProdutoListComponent } from './components/produto-list/produto-list.component';
import { AngularMaterialModule } from '../shared/angular-material/angular-material.module';
import { ProdutoListCardComponent } from './components/produto-list-card/produto-list-card.component';


@NgModule({
  declarations: [
    ProdutoListComponent,
    ProdutoListCardComponent
  ],
  imports: [
    CommonModule,
    ProdutoRoutingModule,
    AngularMaterialModule
  ]
})
export class ProdutoModule { }
