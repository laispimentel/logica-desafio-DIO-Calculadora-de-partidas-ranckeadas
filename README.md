# Calculadora de partidas ranckeadas

Este projeto desafio DIO sobre logica de programação, utiliza JavaScript para classifica heróis por suas lanes, inspirado no jogo LOL. Ele calcula com base em suas vitórias e derrotas, atribuindo-lhes um nível e exibindo o resultado com sua posição no jogo.

## Como Funciona

O código define um array de objetos `jogadores`, onde cada objeto representa um jogador com sua posição, número de vitórias e derrotas. Ele itera por este array, calcula o saldo de vitórias e derrotas para cada jogador e determina o nível correspondente. O resultado é exibido no console, mostrando a posição do jogador e seu nível.

## Níveis de Herói

Os níveis são classificados da seguinte forma:

- **Ferro:** Saldo <= 10
- **Bronze:** 11 <= Saldo <= 20
- **Prata:** 21 <= Saldo <= 50
- **Ouro:** 51 <= Saldo <= 80
- **Diamante:** 81 <= Saldo <= 90
- **Lendário:** 91 <= Saldo <= 100
- **Imortal:** Saldo > 100

## Como Executar

Para executar este código, você precisará de um ambiente Node.js instalado. Siga estes passos:

1.  Clone o repositório para a sua máquina local.
2.  Abra o terminal na pasta do projeto.
3.  Execute o comando `node index.js` 

## Exemplo de Saída

- top: O herói tem um saldo de 101 e está no nível Imortal
- mid: O herói tem um saldo de 5 e está no nível Ferro
- jungle: O herói tem um saldo de 20 e está no nível Bronze
- ADC: O herói tem um saldo de 80 e está no nível Ouro
- suport: O herói tem um saldo de 3 e está no nível Ferro

## Contribuição

Contribuições são bem-vindas! Se você tiver sugestões de melhorias ou correções de bugs, por favor, abra uma issue ou envie um pull request.
