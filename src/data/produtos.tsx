import { Produto } from "../types";

export const produtos: Produto[] = [
  // Clássicos
  { id: 1, categoria: "Clássicos", nome: "Cupcake de Chocolate Belga", descricao: "Massa fofinha com cobertura de ganache.", preco: 8.5, imagem: require("../../assets/images/chobelga.jpg") },
  { id: 2, categoria: "Clássicos", nome: "Cupcake de Baunilha", descricao: "Clássico com buttercream e granulado colorido.", preco: 7.0, imagem: require("../../assets/images/baunilha.jpg") },
  { id: 3, categoria: "Clássicos", nome: "Cupcake de Brigadeiro", descricao: "Recheio e cobertura de brigadeiro.", preco: 8.0, imagem: require("../../assets/images/brigadeiro.jpg") },

  // Frutados
  { id: 4, categoria: "Frutados", nome: "Cupcake de Morango", descricao: "Recheio de geleia de morango e chantilly.", preco: 8.0, imagem: require("../../assets/images/morango.jpg") },
  { id: 5, categoria: "Frutados", nome: "Cupcake de Limão", descricao: "Massa cítrica com cobertura de merengue.", preco: 7.5, imagem: require("../../assets/images/limao.jpg") },

  // Especiais
  { id: 6, categoria: "Especiais", nome: "Cupcake de Red Velvet", descricao: "Massa vermelha com cream cheese.", preco: 9.5, imagem: require("../../assets/images/redvelvet.jpg") },
  { id: 7, categoria: "Especiais", nome: "Cupcake de Doce de Leite", descricao: "Recheado com doce de leite e coco.", preco: 8.5, imagem: require("../../assets/images/docedeleite.jpg") },

  // Caixas e Combos
  { id: 8, categoria: "Caixas e Combos", nome: "Caixa com 4 Cupcakes", descricao: "Escolha 4 sabores clássicos com desconto.", preco: 28.0, imagem: require("../../assets/images/caixa4.jpg") },
  { id: 9, categoria: "Caixas e Combos", nome: "Mini Cupcakes Sortidos", descricao: "Caixa com 6 minis de sabores variados.", preco: 18.0, imagem: require("../../assets/images/mini.jpg") },
];