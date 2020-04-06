import { PipeTransform, Pipe } from "@angular/core";
import { Funcionario } from "../model/funcionario";

@Pipe({ name: 'filterByName'})
export class filterByName implements PipeTransform {

    transform(funcionarios: Funcionario[], name: string) {
        name = name.trim().toLowerCase();

        if (name) {
            return funcionarios.filter(func => func.nome.toLowerCase().includes(name));
        } else {
            return funcionarios;
        }
    }

}