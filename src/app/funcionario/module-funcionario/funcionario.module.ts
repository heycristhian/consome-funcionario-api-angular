import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FuncionarioComponent } from '../list-funcionario/funcionario.component';
import { HttpClientModule } from '@angular/common/http';
import { filterByName } from '../list-funcionario/filter-by-name.pipe';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ErrorMessageModule } from 'src/app/shared/components/error-message/error-messagem.module';
import { ErrorMessageComponent } from 'src/app/shared/components/error-message/error-message.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    ErrorMessageModule,
  ],
  declarations: [
    FuncionarioComponent,
    filterByName,
  ],
  exports: [
    FuncionarioComponent,
    ReactiveFormsModule,
    FormsModule,
    ErrorMessageComponent,
  ]
})
export class FuncionarioModule { }
