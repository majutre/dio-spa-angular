# Projeto SPA-Angular - Digital Innovation One

###### *Este projeto é parte do Bootcamp Avanade Angular Developer*

O objetivo deste projeto era construir uma Single-Page Application utilizando Angular e Angular Material. Os requisitos principais eram:

- Criar ao menos 3 componentes e fazê-los interagir em uma página;
- Utilizar ao menos 4 componentes do Angular Material;
- Utilizar interpolação ou data-binding em pelo menos um dos componentes.

Para isso, foi criado um protótipo de uma futura aplicação para gerenciamento de processos judiciais a ser desenvolvida. A ideia foi utilizar os conhecimentos adquiridos nas aulas para simular cadastro de casos/clientes e agendamentos de prazos.

Seguindo os objetivos do projeto, foram criados 4 componentes principais (agenda, casos, cadastro de clientes e cadastro de processos) e um componente núcleo (home) para concentrar as rotas aos outros componentes. Também optou-se por criar um serviço para o componente de Clientes para facilitar a manutenção do código e futuras implementações.

Os principais componentes do Angular Material utilizados são: Cards, Datepicker,  Toolbar,  Form-field, mas também são utilizados componentes secundários, como Icons e Error.

Para escolha das cores-tema foi utilizado o [ColorHunt](https://colorhunt.co/).

Os componentes de cadastro foram simplificados para fins didáticos, e disponibilizam dados vindos do cadastro de processos por meio de data-biding.

Apesar de cumprir os requisitos do projeto, algumas implementações ainda serão feitas, como:

- Associação de clientes e processos;
- Ajustes no componente "agenda";
- Ajustes no componente "casos" para mostrar os dados vindos dos cadastros;
- Refatoramento e otimizações no código.

Apesar de os componentes de casos e processos estarem desativados no menu do Home, ainda é possível clicá-los para ver o que já foi feito.

