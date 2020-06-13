import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Funcionario } from "../model/funcionario";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root'})
export class FuncionarioService {

    constructor(private http: HttpClient) { }

    listFuncionario() {
        return this.http
            .get<Funcionario[]>("http://localhost:8080/service/funcionarios");

    }

    getFuncionario(parametro: string) {
        return this.http
            .get<Object[]>("http://localhost:8080/service/funcionarios?consulta=" + parametro);
    }

 

    delete(id: number): Observable<{}> {
        return this.http.delete("http://localhost:8080/service/funcionarios/" + id);
    }

    update(func: Funcionario): Observable<{}> {
        func.descricaoCargo = func.cargo.descricao;
        func.nome = "BANANA";
        const url = "http://localhost:8080/service/funcionarios/";
        return this.http.put(url, func);
    }

      
}