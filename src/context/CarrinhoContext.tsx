import { createContext, useContext, useState, type ReactNode } from "react";
import { ItemCarrinho, Produto } from "../types";

// tudo que o carrinho compartilhado oferece às telas
type CarrinhoContextType = {
  carrinho: ItemCarrinho[];
  adicionarAoCarrinho: (produto: Produto) => void;
  alterarQuantidade: (id: number, delta: number) => void;
  removerDoCarrinho: (id: number) => void;
  limparCarrinho: () => void;
};

const CarrinhoContext = createContext<CarrinhoContextType | null>(null);

export function CarrinhoProvider({ children }: { children: ReactNode }) {
  const [carrinho, setCarrinho] = useState<ItemCarrinho[]>([]);

  function adicionarAoCarrinho(produto: Produto) {
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
  function alterarQuantidade(id: number, delta: number) {
    setCarrinho((atual) =>
      atual
        .map((i) =>
          i.id === id ? { ...i, quantidade: i.quantidade + delta } : i,
        )
        .filter((i) => i.quantidade > 0),
    );
  }

  function removerDoCarrinho(id: number) {
    setCarrinho((atual) => atual.filter((i) => i.id !== id));
  }

  function limparCarrinho() {
    setCarrinho([]);
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
  return useContext(CarrinhoContext) as CarrinhoContextType;
}