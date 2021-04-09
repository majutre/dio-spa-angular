import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './shared/home/home.component';
import { CadastroProcessoComponent } from './components/cadastro-processo/cadastro-processo.component';
import { CadastroClienteComponent } from './components/cliente/cadastro-cliente/cadastro-cliente.component';
import { CasosComponent } from './components/casos/casos.component';
import { AgendaComponent } from './components/agenda/agenda.component';
import { ClienteComponent } from './components/cliente/cliente.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'agenda', component: AgendaComponent },
  { path: 'casos', component: CasosComponent },
  { path: 'cadastro', children: [
    { path: 'processo', component: CadastroProcessoComponent },
    { path: 'cliente', component: ClienteComponent },
  ]},
  { path: 'clientes', component: ClienteComponent },
  { path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
