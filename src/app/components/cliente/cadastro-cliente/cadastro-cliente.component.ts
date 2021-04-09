import { ClienteService } from './../cliente.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Cliente } from '../cliente.model';



@Component({
  selector: 'spa-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})
export class CadastroClienteComponent implements OnInit {

  //id: number;
  cadastroCliente: FormGroup;
  clientes: Cliente[] = [];

  constructor(
    private fb: FormBuilder,
    private clienteService: ClienteService
  ) { }

  // get f() {
  //   return this.cadastroCliente.controls;
  // }

  ngOnInit(): void {
    this.clientes = this.clienteService.getClientes();

    this.cadastroCliente = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(80)]],
      nacionalidade: ['', [Validators.required]],
      cpf: ['', [Validators.required]],
    });

  }

  onSubmit(): void {

    this.cadastroCliente.markAllAsTouched();
    if (this.cadastroCliente.invalid) {
      return;
    }
    const cliente = this.cadastroCliente.getRawValue() as Cliente;
    this.clienteService.addCliente(cliente);
    console.log(this.clientes);
    this.onReset();

  }

  onReset(): void {
    this.cadastroCliente.reset();
  }


}
