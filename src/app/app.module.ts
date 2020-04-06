import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FuncionarioModule } from './funcionario/module-funcionario/funcionario.module';
import { RegisterFuncionarioComponent } from './funcionario/register-funcionario/register-funcionario.component';
import { AppRountingModule } from './app.routing.module';
import { APP_BASE_HREF } from '@angular/common';
import { ErrorsModule } from './errors/module/errors.module';

@NgModule({
  declarations: [
    AppComponent,
    RegisterFuncionarioComponent,
  ],
  imports: [
    BrowserModule,
    FuncionarioModule,
    AppRountingModule,
    ErrorsModule
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue : '/' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
