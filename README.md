#### node v12.16.3

#### angular cli 9.1.7

#### API site: https://openweathermap.org/ criar usuario

API keys copia a key 74dce856bcb4e8c316f8637f34d0be0e

adiciona a key no enviroment.ts

em tslint.json colocar Component e Page ira permitir criar componentes com sufixo
```
"component-class-suffix": [
      true,
      "Component",
      "Page"
    ],
```
criar home model

#### ng g m pages/model

#### ng g m pages/bookmarks

#### ng c pages/home --type page

#### ng c pages/bookmarks --type page

## STATE MANAGER REDUX

redux para angular site ngrx.io state manager 

nossa aplicacao reaje a alteracoes na Store 

**Store** (definimos como json) que ira guardar estados interessantes da aplicacao

**Componente** ira consumir a Store por meio de **Selector**

**Componente** realiza **Acao** e por meio de um **Reducer** armazena na **Store** 

a **Acao** pode desencadear **Efeitos** (chamadas de **Servicos**)

instalar ngrx

#### npm install @ngrx/store --save

no app.module.ts

 apos instalar @ngrx/store cria STORE

    StoreModule.forRoot({}),

 No home.module.ts inserir Store, primeiro parametro chave, segundo reducer

	StoreModule.forFeature('home', homeReducer),

Instalar ngrx devtools

#### npm install @ngrx/store-devtools --save

Instalar effects

#### npm install @ngrx/effects --save

## Boa Pratica comecar pelas actions -> reducer -> effects

#### ng g s shared/services/weather --skipTests true

Use a aba Redux no chrome devtools para ver as actions em efeito

#### ng g m pages/details

#### ng g c pages/details/containers/details --type page

Na API vamos usar onecall (usar coordenadas)

criar Router Guard para garantir que a URL esta correta

#### ng g s pages/details/services/details.guard --skipTests

ngrx colocar estado da rota na STORE, documentacao @ngrx/router-store

#### npm install @ngrx/router-store --save

#### ng add ngx-bootstrap

ver a documentacao no ngx-bootstrap Typeahead

async using http request

#### ng g c shared/components/cities-typeahead

site material.angular.io ver a documentacao de portal

#### npm i @angular/cdk
