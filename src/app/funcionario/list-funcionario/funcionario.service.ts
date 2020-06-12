import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Funcionario } from "../model/funcionario";

@Injectable({ providedIn: 'root'})
export class FuncionarioService {

    constructor(private http: HttpClient) { }

    ListFuncionario() {
        return this.http
            .get<Funcionario[]>("http://localhost:8080/service/funcionarios");

    }

    getFuncionario(parametro: string) {
        return this.http
            .get<Object[]>("http://localhost:8080/service/funcionarios?consulta=" + parametro);

    }
}