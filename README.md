# Gerador de Base de Conhecimento sobre Religiões e Crenças (com Gemini)

## Descrição
Este projeto cria e expande uma base de conhecimento em formato JSON sobre diversas religiões, mitologias e sistemas de crenças ao redor do mundo. A cada execução, o script utiliza a API Gemini para gerar 25 novas entradas únicas, garantindo que não haja duplicatas, e as adiciona ao arquivo `baseDeConhecimento.json`.

## O que ele faz
- **Gera conteúdo:** Cria 25 novas entradas sobre religiões ou crenças em formato JSON a cada execução.
- **Evita duplicatas:** Usa a lista de nomes existentes para solicitar apenas conteúdo inédito.
- **Valida a resposta:** Garante que a API retornou um array com o número exato de itens solicitados.
- **É resiliente:** Realiza novas tentativas com tempo de espera exponencial em caso de falhas na comunicação com a API.
- **Atualiza a base:** Salva o resultado combinado (entradas antigas + novas) no arquivo `baseDeConhecimento.json`.

## Pré-requisitos
- Node.js instalado (v16+ recomendado).
- Chave da Gemini API.

## Como executar
1. Instale dependências:
   ```bash
   npm install
