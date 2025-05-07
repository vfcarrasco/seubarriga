
# Projeto de Testes Automatizados - Site Seu Barriga

Este projeto é uma avaliação prática que utiliza Cypress para testar funcionalidades do site Seu Barriga. O foco está em validar o cadastro de usuários, autenticação, gerenciamento de contas e movimentações financeiras.
## Funcionalidades Testadas

- Cadastro de Novo Usuário
Valida que novos usuários podem ser cadastrados com sucesso.

- Tentativa de Login com Senha Inválida
Verifica a exibição de mensagens de erro ao tentar logar com credenciais incorretas.

- Login com Credenciais Válidas
Testa se um usuário pode autenticar-se com sucesso usando email e senha válidos.

- Cadastro de Nova Conta
Valida que é possível cadastrar uma nova conta financeira após autenticação.

- Cadastro de Movimentação Financeira
Verifica se é possível adicionar uma movimentação (ex.: receita) à conta.

- Validação de Movimentações
Garante que as movimentações cadastradas estão listadas corretamente no sistema.

- Validação de Email já Cadastrado
Testa se o sistema impede o cadastro de um email já existente.




## Pré-requisitos

- Node.js version: 22.14.0

- mpn version: 10.9.2

- Cypress binary version: 13.16.0

- Electron version: 27.3.10

- Bundled Node version: 18.17.1



## Configuração

- Clone o repositório:
```bash
git clone <URL_DO_REPOSITORIO>
cd <NOME_DO_PROJETO>
```

- Instale as dependências:
```bash
npm install
```

- Inicie o Cypress:
```bash
npx cypress open
```

## Executando os Testes

Para executar os testes no modo interativo:
```bash
npx cypress open
```
Selecione o arquivo de teste e acompanhe a execução pelo navegador.

Para rodar os testes em modo headless:
```bash
npx cypress run
```

## Estrutura dos Testes

Para suporte, mande um email para fake@fake.com ou entre em nosso canal do Slack.

O arquivo principal de testes está localizado em cypress/e2e/seu-barriga.spec.js. Ele inclui testes organizados em blocos describe e it, garantindo clareza na execução e propósito de cada cenário.

### Comandos Customizados
Os comandos customizados, como cy.cadastro e cy.login, estão configurados para facilitar a reutilização de passos comuns nos testes. Estes devem estar definidos no arquivo cypress/support/commands.js.

### Utilização de Faker
Para evitar dependências de dados fixos, foi utilizado o pacote faker para gerar emails únicos em tempo de execução.

## Estrutura do Projeto

<raiz_do_projeto>
```bash
├── cypress/
│   ├── e2e/
│   │   └── seu-barriga.spec.js  # Testes principais
│   ├── support/
│   │   └── commands.js         # Definições de comandos customizados
│   └── fixtures/               # Arquivos JSON para mocks (se necessário)
├── node_modules/               # Dependências do projeto
├── package.json                # Configurações e scripts do npm
└── README.md                   # Documentação do projeto
```

## Contribuindo

Sinta-se à vontade para abrir issues ou enviar pull requests para melhorias no projeto.

## Licença

Este projeto está licenciado sob a MIT License.

## Autores

- [Vitor Felipe Carrasco ](https://github.com/vfcarrasco/seubarriga)
