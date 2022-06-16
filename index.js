/**
 * Desafio: escrever uma função que valide se uma palavra é valida em um tabuleiro de Parole.
 * A função irá receber dois argumentos:
 * - Um array bi-dimensional (NxN) com letras de A a Z representando o tabuleiro
 * - Uma palavra que deve ser validada
 *
 * Palavras válidas são formadas por ligações adjacentes das letras (horizontas, vertical, diagonal) sem reutilizar as posições usadas anteriormente.
 *
 * Exemplo de um valor de entrada:
 * [ ["I","L","A","W"],
 *   ["B","N","G","E"],
 *   ["I","U","A","O"],
 *   ["A","S","R","L"] ]
 *
 * Neste caso, podemos considerar:
 * - "BINGO", "ILNBIA", "LINGO" são palavras válidas.
 * - "BUNGIE", "SINUS", "BINS" são palavras inválidas.
 *
 * Não é necessário verificar se a palavra é real ou não, apenas se ela é valida no tabuleiro.
 *
 * Voce pode testar o seu codigo rodando o comando `npm test` no terminal
 * e tambem pode alterar o arquivo `index.test.js` se desejar.
 * Apos enviado, seu codigo sera validado com outros cenarios de teste tambem.
 *
 * @param tabuleiro array bidimensional representando o tabuleiro
 * @param palavra palavra que deve ser validada no tabuleiro
 * @returns `true` ou `false`, informando se a palavra é valida para o tabuleiro
 */

function parole(tabuleiro, palavra) {
  // implemente o codigo aqui
  //
  // Leitura das linhas
  for (let l = 0; l < tabuleiro.length; l++) {
    // Leitura das colunas
    for (let c = 0; c < tabuleiro[l].length; c++) {
      // Comparação com os elementos da mesma linha
      for (let i = c + 1; i < tabuleiro[l].length; i++) {
        if (tabuleiro[l][c] == palavra[l][i]) {
          return false;
        }
      }
      // Comparação com os elementos da mesma coluna
      for (let i = l + 1; i < tabuleiro.length; i++) {
        if (tabuleiro[l][c] == palavra[i][c]) {
          return false;
        }
      }
    }
  }
  return;
}

module.exports = parole;
