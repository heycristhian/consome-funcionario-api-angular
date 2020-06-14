import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { RegisterFuncionarioService } from './register-funcionario.service';
import { Funcionario } from '../model/funcionario';
import { Cargo } from '../model/cargo';

@Component({
  selector: 'app-register-funcionario',
  templateUrl: './register-funcionario.component.html',
  styleUrls: ['./register-funcionario.component.css'],
})
export class RegisterFuncionarioComponent implements OnInit {

  registerForm: FormGroup;
  isPut: boolean;
  cargo: Cargo;
  funcionario: Funcionario;

  constructor(
    private formBuilder: FormBuilder,
    private service: RegisterFuncionarioService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: any) => {
        const id = params['id'];
        if (id != undefined) {
          this.service.getFuncionarioById(id)
            .subscribe(func => {
              this.isPut = true;
              this.funcionario = func;
              this.updateForm(func);
            });
        }

      }
    );

    this.registerForm = this.formBuilder.group({
      id: [null],
      name: [null, Validators.required],
      cpf: [null, Validators.required],
      descricaoCargo: ['DESENVOLVEDOR']
    });
  }

  enviar() {
    if (this.isPut) {
      this.put();
    } else {
      this.post();
    }
  }

  put() {
    this.funcionario.nome = this.registerForm.get('name').value;
    this.funcionario.cpf = this.registerForm.get('cpf').value;
    this.funcionario.descricaoCargo = this.registerForm.get('descricaoCargo').value;

    this.service.enviarPut(this.funcionario)
      .subscribe(
        () => this.router.navigateByUrl('/list-funcionarios'),
        err => {
          console.log(err);
          this.registerForm.reset;
        }
      );
  }
  post() {
    const name = this.registerForm.get('name').value;
    const cpf = this.registerForm.get('cpf').value;
    const descricaoCargo = this.registerForm.get('descricaoCargo').value;

    this.service.enviarPost(name, cpf, descricaoCargo)
      .subscribe(
        () => this.router.navigateByUrl('/list-funcionarios'),
        err => {
          console.log(err);
          this.registerForm.reset;
        }
      );
  }

  updateForm(funcionario: Funcionario) {
    this.registerForm.patchValue({
      id: funcionario.id,
      name: funcionario.nome,
      cpf: funcionario.cpf,
      descricaoCargo: funcionario.cargo.descricao
    });
  }
}
