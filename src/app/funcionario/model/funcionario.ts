import { Cargo } from "./cargo";

export interface Funcionario {

    id: number;
    nome:string;
    cpf:string;
    cargo: Cargo;
    descricaoCargo: string;
}