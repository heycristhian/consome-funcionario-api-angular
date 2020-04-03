import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-funcionario',
  templateUrl: './register-funcionario.component.html',
  styleUrls: ['./register-funcionario.component.css'],
})
export class RegisterFuncionarioComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { } 

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      cpf: ['', Validators.required],
      dataNascimento: ['', Validators.required],
      cargoDescricao: ['DESENVOLVEDOR']
    });
  }

}
