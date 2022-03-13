# Catálogo de aulas por módulo

## Ferramentas utilizadas:
- Node com framework Nestjs para o backend
- Angular para o frontend
- Banco de dados relional Postgresql


## Passos para utilizr o projeto na máquina local

### Iniciar a aplicação em Angular
#### 1 - Clonar o projeto: git clone https://github.com/santoskarolina/modulo_aulas_angular.git
#### 2 - Instalar os pacotes necessários: npm i
#### 3 - subir a aplicação: ng serve

### Iniciar a aplicação em Nestjs
#### 1 - Clonar o projeto: git clone https://github.com/santoskarolina/modulo_aulas_nestjs.git
#### 2 - Instalar os pacotes necessários: npm i
#### 3- criar uma base de dados com nome "aulas_modulo" e um schema com nome "modulo_aulas"
#### 4 - rodar a migração de criação de primeir usuário: npm run typeorm migration:run
#### 5 - subir a aplicação: rpm run start:dev

    Feito isso, basta acessar http://localhost:4200/ para utilizar a aplicação.

    Para fazer o login com usuário criado na migration, usar as credencias abaixo:
    # email: usuario@admin.com.br
    # senha: 123456


