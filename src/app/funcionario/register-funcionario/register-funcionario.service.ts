import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const url = 'http://localhost:8080/service/funcionarios';

@Injectable({
  providedIn: 'root'
})
export class RegisterFuncionarioService {

  constructor(private http: HttpClient) { }

  enviarPost(nome: string, cpf: string, dataNascimento: string, descricaoCargo: string) {
    return this.http.post(url, {nome, cpf, dataNascimento, descricaoCargo})
  }
}
