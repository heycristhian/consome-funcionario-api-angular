import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterFuncionarioService } from './register-funcionario.service';
import { Funcionario } from '../model/funcionario';

@Component({
  selector: 'app-register-funcionario',
  templateUrl: './register-funcionario.component.html',
  styleUrls: ['./register-funcionario.component.css'],
})
export class RegisterFuncionarioComponent implements OnInit {

  registerForm: FormGroup;
  funcionario: Funcionario;

  constructor(
    private formBuilder: FormBuilder,
    private service: RegisterFuncionarioService,
    private router: Router
    ) { } 

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      cpf: ['', Validators.required],
      dataNascimento: ['', Validators.required],
      descricaoCargo: ['DESENVOLVEDOR']
    });
  }

  enviar(){
    const nome = this.registerForm.get('name').value;
    const cpf = this.registerForm.get('cpf').value;
    const dataNascimento = this.registerForm.get('dataNascimento').value;
    const descricaoCargo = this.registerForm.get('descricaoCargo').value;

    this.service.enviarPost(nome, cpf, dataNascimento, descricaoCargo)
    .subscribe(
      () => this.router.navigateByUrl('/list-funcionarios'),
      err => {
        console.log(err);
        this.registerForm.reset;
      }
      );
  }
}
