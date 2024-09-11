# File Manager CLI

Uma poderosa aplicação de linha de comando (CLI) desenvolvida com Node.js para gerenciar arquivos e diretórios. Este projeto fornece uma interface simples e interativa que permite aos usuários realizar operações comuns de arquivos, como criar, listar, ler, escrever e deletar, de forma rápida e eficiente.

## Funcionalidades

- **Criação de arquivos**: Crie arquivos com ou sem conteúdo inicial.
- **Listagem de arquivos**: Liste todos os arquivos presentes em um diretório especificado.
- **Leitura de arquivos**: Leia o conteúdo de arquivos de texto.
- **Escrita em arquivos**: Escreva ou sobrescreva conteúdo em arquivos.
- **Exclusão de arquivos**: Delete arquivos existentes.

## Requisitos

- Node.js versão 0.8.0 ou superior.

## Instalação

1. Clone o repositório:

    ```bash
    git clone https://github.com/DanielJavaCoffee/creating-file
     ```

2. Navegue até o diretório do projeto:

3. Instale as dependências:

    ```bash
    npm install
    ```

## Bibliotecas Usadas

- **[`fs`](https://nodejs.org/api/fs.html)**: Biblioteca nativa do Node.js para manipulação de arquivos e diretórios.
- **[`path`](https://nodejs.org/api/path.html)**: Biblioteca nativa do Node.js para manipulação de caminhos de arquivos e diretórios.
- **[`readline-sync`](https://www.npmjs.com/package/readline-sync)**: Biblioteca para capturar entrada de dados de forma síncrona via linha de comando.
  
## Uso

Execute o aplicativo usando o Node.js:

```bash
node app.js
