import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'spa-cadastro-processo',
  templateUrl: './cadastro-processo.component.html',
  styleUrls: ['./cadastro-processo.component.css']
})
export class CadastroProcessoComponent implements OnInit {

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);


  constructor() { }

  ngOnInit(): void {
  }

}
