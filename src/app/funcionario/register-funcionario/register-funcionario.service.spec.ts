import { TestBed, inject } from '@angular/core/testing';

import { RegisterFuncionarioService } from './register-funcionario.service';

describe('RegisterFuncionarioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegisterFuncionarioService]
    });
  });

  it('should be created', inject([RegisterFuncionarioService], (service: RegisterFuncionarioService) => {
    expect(service).toBeTruthy();
  }));
});
