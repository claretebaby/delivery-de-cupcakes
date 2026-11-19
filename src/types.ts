import { ImageSourcePropType } from "react-native";

// formato de um produto do cardápio
export type Produto = {
  id: number;
  categoria: string;
  nome: string;
  descricao: string;
  preco: number;
  imagem: string | ImageSourcePropType; // link (string) ou imagem local (require)
};

// item do carrinho = produto + quantidade escolhida
export type ItemCarrinho = Produto & { quantidade: number };