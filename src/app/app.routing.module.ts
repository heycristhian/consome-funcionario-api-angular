import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { FuncionarioComponent } from "./funcionario/list-funcionario/funcionario.component";
import { RegisterFuncionarioComponent } from "./funcionario/register-funcionario/register-funcionario.component";
import { NotFoundComponent } from "./errors/not-found/not-found.component";

const routes: Routes = [
    { path: 'list-funcionarios', component: FuncionarioComponent },
    { path: '', component: FuncionarioComponent },
    { path: 'register-funcionario', component: RegisterFuncionarioComponent },
    { path: 'edit-funcionario/:id', component: RegisterFuncionarioComponent },
    { path: '**', component: NotFoundComponent },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRountingModule {

}