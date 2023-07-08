# back-full-stack-challenge
API utilizada em um teste full stack que consiste em criar um pequeno cadastro de clientes com vínculo de contatos, depois mostrar o cliente e seus contatos vinculados.

# 1 Instale as dependências usando o seguinte comando CLI:
yarn install

# 2 Banco de Dados
Crie um banco de dados. O projeto usa PostgreSQL

# 3 Variáveis de ambiente
Crie na raiz do projeto um arquivo .env seguindo o modelo do arquivo .env.example, atribuindo o banco de dados que acabaou de criar entre as variáveis necessárias

# 4 Agora precisamos gerar uma migração executando o seguinte comando CLI:
yarn typeorm migration:generate src/migrations/createTables -d src/data-source.ts

# 5 Execute o migration para criar as tabelas no seu banco de dados usando o seguinte comando CLI:
yarn typeorm migration:run -d src/data-source.ts

# 4 Connect o banco de dados usando o seguinte comando CLI:
yarn dev

# Banco de dados conectado
Database connected!
Server is running on port http://localhost:3000

A aplicação está rodando localmente e você poderá acessá-la utilizando a porta http://localhost:3000

