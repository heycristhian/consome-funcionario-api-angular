import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Funcionario } from '../model/funcionario';

const url = 'http://localhost:8080/service/funcionarios';

@Injectable({
  providedIn: 'root'
})
export class RegisterFuncionarioService {
  constructor(private http: HttpClient) { }

  enviarPost(nome: string, cpf: string, descricaoCargo: string) {
    return this.http.post(url, { nome, cpf, descricaoCargo })
  }

  getFuncionarioById(id: string) {
    return this.http.get<Funcionario>(url + '/' + id);
  }

  enviarPut(func: Funcionario) {
    return this.http.put(url, func);
  }
}
