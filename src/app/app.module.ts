import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './shared/material/material.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './shared/home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { CadastroProcessoComponent } from './components/cadastro-processo/cadastro-processo.component';
import { CadastroClienteComponent } from './components/cadastro-cliente/cadastro-cliente.component';
import { AgendaComponent } from './components/agenda/agenda.component';
import { CasosComponent } from './components/casos/casos.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    CadastroProcessoComponent,
    CadastroClienteComponent,
    AgendaComponent,
    CasosComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
