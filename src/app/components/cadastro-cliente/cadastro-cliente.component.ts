import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'spa-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})
export class CadastroClienteComponent implements OnInit {


  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);


  constructor() { }

  ngOnInit(): void {
  }

}
