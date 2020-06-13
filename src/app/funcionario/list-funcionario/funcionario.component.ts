import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from './funcionario.service';
import { Funcionario } from '../model/funcionario';
import { Router } from '@angular/router';
import { RegisterFuncionarioComponent } from '../register-funcionario/register-funcionario.component';

@Component({
  selector: 'app-funcionario',
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.css']
})
export class FuncionarioComponent implements OnInit {

  funcionarios: Funcionario[] = []
  funcionario: Funcionario = null;
  filter: string = '';
  register: RegisterFuncionarioComponent;


  constructor(private funcionarioService: FuncionarioService, private router: Router) {
  }
  
  ngOnInit() {
    this.funcionarioService.listFuncionario()
    .subscribe(func => {
      this.funcionarios = func;
      console.log(func);
    });
  }

  delete(id: number) {
    this.funcionarioService
      .delete(id)
      .subscribe();
    window.location.reload();

  }

  update(func: Funcionario) {
    this.funcionarioService.update(func)
      .subscribe();
    window.location.reload();
  }

  edit(func: Funcionario) {
    this.funcionarioService
      .update(func)
      .subscribe();
    window.location.reload();
  }
}
