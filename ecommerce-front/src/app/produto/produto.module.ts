import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutoRoutingModule } from './produto-routing.module';
import { ProdutoListComponent } from './components/produto-list/produto-list.component';
import { AngularMaterialModule } from '../shared/angular-material/angular-material.module';
import { ProdutoListCardComponent } from './components/produto-list-card/produto-list-card.component';
import { ProdutoFormComponent } from './components/produto-form/produto-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProdutoListComponent,
    ProdutoListCardComponent,
    ProdutoFormComponent
  ],
  imports: [
    CommonModule,
    ProdutoRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule
  ]
})
export class ProdutoModule { }
