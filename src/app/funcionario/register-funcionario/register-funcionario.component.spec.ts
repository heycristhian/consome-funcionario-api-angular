import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterFuncionarioComponent } from './register-funcionario.component';

describe('RegisterFuncionarioComponent', () => {
  let component: RegisterFuncionarioComponent;
  let fixture: ComponentFixture<RegisterFuncionarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterFuncionarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterFuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
