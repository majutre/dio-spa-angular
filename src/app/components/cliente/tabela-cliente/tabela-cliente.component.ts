import { ClienteService } from './../cliente.service';
import { Component, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';

import { Cliente } from '../cliente.model';

@Component({
  selector: 'spa-tabela-cliente',
  templateUrl: './tabela-cliente.component.html',
  styleUrls: ['./tabela-cliente.component.css']
})
export class TabelaClienteComponent implements OnInit, OnDestroy {

  clientes: Cliente[] = [ ];
  displayedColumns: string[] = ['name', 'country', 'cpf'];
  subscription: Subscription;

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.subscription = this.clienteService.clientesChanged
      .subscribe(
        (clientes: Cliente[]) => {
          this.clientes = clientes;
        }
      );
    this.clientes = this.clienteService.getClientes();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
