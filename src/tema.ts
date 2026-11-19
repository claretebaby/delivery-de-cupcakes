// Todas as cores do app num só lugar: para trocar a paleta, mude só aqui
export const cores = { // cria um objeto chamado "cores" e deixa outros arquivos usarem (export)
  primaria: '#FF3D81', // rosa forte: botões e preços
  secundaria: '#FF7AA8', // rosa mais claro: detalhes
  amarelo: '#FFC83D', // amarelo: destaques
  fundo: '#FFE3EE', // rosa bem clarinho: fundos
  fundoClaro: '#FFF0F6', // rosa quase branco: fundo das telas
  texto: '#4A2C2A', // marrom chocolate: textos
  textoSuave: '#8D6E63', // marrom claro: textos secundários
  titulo: '#C2185B', // rosa escuro: títulos
  branco: '#FFFFFF', // branco: cartões
  borda: '#FFC2D9', // rosa claro: bordas
}; // fim do objeto de cores

// Recebe um número (valor: number) e devolve um texto (: string) no formato de preço
export const formatarPreco = (valor: number): string => `R$ ${valor.toFixed(2).replace('.', ',')}`; // 8.5 vira "R$ 8,50"