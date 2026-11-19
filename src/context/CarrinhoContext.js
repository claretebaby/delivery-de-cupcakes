import { createContext, useContext, useState } from "react";

const CarrinhoContext = createContext(null);

export function CarrinhoProvider({ children }) {
  const [carrinho, setCarrinho] = useState([]);

  function adicionarAoCarrinho(produto) {
    console.log("Adicionado", produto.nome);
    setCarrinho((atual) => {
      const existe = atual.find((i) => i.id === produto.id);
      if (existe) {
        return atual.map((i) =>
          i.id === produto.id ? { ...i, quantidade: i.quantidade + 1 } : i,
        );
      }
      return [...atual, { ...produto, quantidade: 1 }];
    });
  }

  // delta = +1 (aumenta) ou -1 (diminui). Se chegar a 0, o item sai.
  function alterarQuantidade(id, delta) {
    setCarrinho((atual) =>
      atual
        .map((i) =>
          i.id === id ? { ...i, quantidade: i.quantidade + delta } : i,
        )
        .filter((i) => i.quantidade > 0),
    );
  }
  function limparCarrinho() { 
    setCarrinho([]);
  }
  

  function removerDoCarrinho(id) {
    setCarrinho((atual) => atual.filter((i) => i.id !== id));
  }
  
  
  return (
    <CarrinhoContext.Provider
      value={{
        carrinho,
        adicionarAoCarrinho,
        alterarQuantidade,
        removerDoCarrinho,
        limparCarrinho,
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
}

export function useCarrinho() {
  return useContext(CarrinhoContext);
}
