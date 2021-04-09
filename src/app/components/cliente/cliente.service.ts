import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Cliente } from "./cliente.model";

@Injectable({ providedIn: "root"})
export class ClienteService {

    private clientes: Cliente[] = [
        new Cliente('Teste1', 'aaa', 'bbb'),
        new Cliente('Teste2', 'aaa', 'bbb'),
        new Cliente('Teste3', 'aaa', 'bbb'),
    ]

    clientesChanged = new Subject<Cliente[]>();

    getClientes() {
        return this.clientes.slice();
    }

    addCliente(cliente: Cliente) {
        this.clientes.push(cliente);
        this.onChanges();
    }

    deleteCliente(index: number) {
        this.clientes.splice(index, 1);
        this.onChanges();
    }

    onChanges() {
        this.clientesChanged.next(this.clientes.slice());
    }
}