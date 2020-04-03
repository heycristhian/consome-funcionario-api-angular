import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from './funcionario.service';
import { Funcionario } from '../model-funcionario/funcionario';

@Component({
  selector: 'app-funcionario',
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.css']
})
export class FuncionarioComponent implements OnInit {

  funcionarios: Funcionario[] = []
  filter: string = '';

  constructor(private funcionarioService: FuncionarioService) {
    
  }
  
  ngOnInit() {
    this.funcionarioService.ListFuncionario()
    .subscribe(func => {
      this.funcionarios = func;
    });
  }

}
