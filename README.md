# Gerador de Base de Conhecimento explorador de Religiões e Crenças
 (com Gemini)

## Descrição
Este projeto é uma página web interativa que cria e expande uma base de conhecimento em formato JSON que permite explorar sobre diversas religiões, mitologias, sistemas filosóficos e de crenças ao redor do mundo. O objetivo é apresentar informações de forma clara e acessível, permitindo ao usuário visualizar detalhes e filtrar o conteúdo dinamicamente.

A aplicação foi desenvolvida como parte da **Imersão Dev**, focando em manipulação do DOM com JavaScript puro e consumo de dados de um arquivo JSON local.

A cada execução, o script utiliza a API Gemini para gerar novas entradas únicas, garantindo que não haja duplicatas, e as adiciona ao arquivo `baseDeConhecimento.json`.

## O que ele faz
- **Gera conteúdo:** Cria 25 novas entradas sobre religiões ou crenças em formato JSON a cada execução.
- **Evita duplicatas:** Usa a lista de nomes existentes para solicitar apenas conteúdo inédito.
- **Valida a resposta:** Garante que a API retornou um array com o número exato de itens solicitados.
- **É resiliente:** Realiza novas tentativas com tempo de espera exponencial em caso de falhas na comunicação com a API.
- **Atualiza a base:** Salva o resultado combinado (entradas antigas + novas) no arquivo `baseDeConhecimento.json`.

  ## ✨ Funcionalidades

- **Listagem Dinâmica**: Exibe cards com informações básicas sobre diferentes religiões.
- **Detalhes Expansíveis**: Ao clicar em um card, mais detalhes como descrição, influência e importância são revelados.
- **Busca em Tempo Real**: Um campo de busca permite filtrar os cards pelo nome, origem ou descrição.
- **Links Externos**: Fornece links para fontes confiáveis (como a Encyclopædia Britannica) para quem deseja aprofundar o conhecimento.

  ## 🛠️ Tecnologias Utilizadas

O projeto foi construído utilizando as seguintes tecnologias:

- **HTML5**: Para a estrutura semântica da página.
- **CSS3**: Para a estilização e layout dos componentes (mesmo que básico).
- **JavaScript (ES6+)**: Para a lógica da aplicação, manipulação do DOM e interatividade.
- **JSON**: Como formato para armazenar e consumir os dados sobre as religiões.


## Pré-requisitos
- Node.js instalado (v16+ recomendado).
- Chave da Gemini API.

## Como executar
1. Instale dependências:
   ```bash
   npm install


## 🚀 Como Executar o Projeto

Para executar este projeto localmente, siga os passos abaixo:

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/seu-usuario/seu-repositorio.git
    ```

2.  **Navegue até o diretório do projeto:**
    ```bash
    cd seu-repositorio
    ```

3.  **Abra o arquivo `index.html` em um servidor local.**
    - Como o projeto utiliza a API `fetch()` para carregar o `date.json`, abri-lo diretamente no navegador pode causar um erro de CORS.
    - A forma mais fácil é usar uma extensão como o **Live Server** no Visual Studio Code. Com ela instalada, basta clicar com o botão direito no arquivo `index.html` e selecionar "Open with Live Server".

## 📊 Fonte dos Dados

Todas as informações sobre as religiões foram coletadas e organizadas no arquivo `date.json`. Os dados foram compilados a partir de fontes de conhecimento geral, e os links para artigos específicos estão disponíveis em cada card para referência.

---

_Este README foi criado para ajudar a documentar o projeto de forma clara e profissional._
