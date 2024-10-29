# PokemonCatch

PokemonCatch é uma aplicação web desenvolvida em Angular (versão 18.2.9) que permite explorar informações sobre cidades e capturar pokémons específicos baseados no clima da localização. O projeto utiliza SASS para estilização e é organizado para garantir a modularidade e reutilização de componentes.

## Índice

- [PokemonCatch](#pokemoncatch)
  - [Índice](#índice)
  - [Funcionalidades](#funcionalidades)
  - [Método de Busca de Pokémons](#método-de-busca-de-pokémons)
  - [Estrutura de Pastas](#estrutura-de-pastas)
    - [modules/](#modules)
    - [shared/](#shared)
    - [SASS/](#sass)
  - [Tecnologias Utilizadas](#tecnologias-utilizadas)
  - [APIs](#apis)
  - [Configuração API](#configuração-api)
  - [Instalação](#instalação)
  - [Como Usar](#como-usar)

## Funcionalidades

- **Consulta de Clima**: Insira o nome da cidade para obter informações sobre a temperatura, clima e condições de chuva.
- **Captura de Pokémon**: Encontre um pokémon específico para o clima da cidade pesquisada, com informações detalhadas sobre seu nome, tipo(s), habilidades e uma imagem do pokemon.
- **Pokémon Único por Cidade**: A cada busca de pokémon na mesma cidade, o novo pokémon deve ser diferente do encontrado anteriormente.

## Método de Busca de Pokémons

- Para lugares onde a temperatura for menor que 5ºC, se encontra pokémons do tipo gelo.
- Para lugares onde a temperatura estiver entre 5ºC (inclusive) e 10ºC, encontram-se pokémons do tipo água.
- Para lugares onde a temperatura estiver entre 12ºC (inclusive) e 15ºC, encontram-se pokémons do tipo grama.
- Para lugares onde a temperatura estiver entre 15ºC (inclusive) e 21ºC, encontram-se pokémons do tipo terra.
- Para lugares onde a temperatura estiver entre 23ºC (inclusive) e 27ºC, encontram-se pokémons do tipo inseto.
- Para lugares onde a temperatura estiver entre 27ºC (inclusive) e 33ºC, encontram-se pokémons do tipo pedra.
- Para lugares onde a temperatura for maior que 33ºC, encontram-se pokémons do tipo fogo.
- Para qualquer outra temperatura, encontram-se pokémons do tipo normal.
- No caso de chuva na região, encontram-se pokémons do tipo elétrico, independentemente da temperatura.

## Estrutura de Pastas

A organização do código está dividida em módulos para facilitar a manutenção e reutilização de componentes.

### modules/

- **weather**: Módulo responsável pela funcionalidade de clima.
  - **Formulário**: Insere o nome da cidade e realiza a consulta.
  - **city-information**: Exibe informações sobre a cidade, como país, temperatura, clima e condições de chuva.
  - **Serviço**: Utiliza RxJS para controlar as requisições à API de clima.
- **pokemon**: Módulo dedicado à funcionalidade de captura de pokémons.
  - **Serviço**: Realiza a conexão com a API de pokémons para buscar informações como nome, imagem, tipos e habilidades, utilizando RxJS para controlar as requisições.
  - **Pokemon**: Exibe e permite buscar e capturar novos pokémons específicos para a cidade, garantindo que sejam sempre diferentes dos encontrados anteriormente .

### shared/

- **Componentes Compartilhados**: Inclui botões, alertas, etc.
- **Diretivas**: Inclui diretivas de formulários, como a remoção de caracteres especiais.
- **Models**: Inclui modelos de resposta para a API de clima.
- **utils**: Funções auxiliares para operações diversas, como transformação de hifens em espaços.
- **Services**: Inclui serviços compartilhado entre modulos, como "Data Behavior".

### SASS/

- **Estilos Globais**: Arquivos de estilo, mixins e variáveis SASS para estilização geral do projeto.

## Tecnologias Utilizadas

- **Angular** 18.2.9
- **SASS** para estilização
- **RxJS** para gerenciamento de requisições assíncronas
- APIs externas para dados de clima e informações sobre pokémons.

## APIs

- **Pokémon** Para consultas de Pokémons: [PokéAPI](https://pokeapi.co/docs/v2)
- **Weather** Para consultas de condições climáticas: [OpenWeatherMap](https://openweathermap.org/api)

## Configuração API

Para configurar a API de clima, é necessário utilizar sua própria chave da OpenWeatherMap. Siga os passos abaixo:

1. Obtenha uma chave de API gratuita no site [OpenWeatherMap](https://openweathermap.org/api).
2. No arquivo `src/app/modules/weather/services/weather.service.ts`, localize a variável `apiKey`.
3. Substitua o valor de `apiKey` pela sua chave de API, como no exemplo abaixo:
   ```typescript
   apiKey: string = "SUA_CHAVE_DE_API";
   ```

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/sergioj1123/desafio-frontend-2024.git
   ```
2. Navegue até o diretório do projeto:
   ```bash
   cd PokemonCatch
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Inicie o servidor de desenvolvimento:
   ```bash
   ng serve
   ```

O projeto estará disponível em `http://localhost:4200`.

## Como Usar

1. **Pesquisa de Cidade**: Na página inicial, insira o nome da cidade desejada sem inserir caracteres especiais, e envie o formulário.
2. **Captura de Pokémon**: Após a pesquisa da cidade, visualize o pokémon disponível para captura com base na localização selecionada. Caso deseje procurar novos pokémons selecione "Encontre outro Pokémon". Caso deseje procurar em outras cidade selecione "Aventurar-se em outra cidade".
