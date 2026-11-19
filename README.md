# Doce Mordida Cupcakes 🧁

## Descrição
Aplicativo mobile de delivery de cupcakes. O usuário navega pelo cardápio, adiciona produtos ao carrinho, ajusta quantidades e confirma o pedido.

## Objetivo
Resolver a desorganização de pedidos de doces feitos por mensagem: cardápio disperso, quantidades combinadas manualmente e valor total desconhecido pelo cliente. O app reúne cardápio, carrinho e total em uma interface simples.

## Tecnologias utilizadas
- React Native
- Expo
- Expo Router
- TypeScript
- Context API
- StyleSheet
- Git
- GitHub

## Funcionalidades
- ✓ Visualização de produtos por categoria (Clássicos, Frutados, Especiais, Caixas e Combos)
- ✓ Busca de produtos por nome
- ✓ Adição ao carrinho
- ✓ Atualização de quantidade (+ / −)
- ✓ Remoção de produtos
- ✓ Contagem de itens
- ✓ Cálculo do valor total
- ✓ Tela de confirmação com resumo do pedido

## Estrutura do projeto
```
assets
└── images                   # fotos dos cupcakes
src
├── app
│   ├── _layout.tsx          # navegação (Stack) e provedor do carrinho
│   ├── index.tsx            # tela inicial
│   ├── cardapio.tsx         # lista, busca e filtro por categoria
│   ├── carrinho.tsx         # itens, quantidades e total
│   └── confirmacao.tsx      # resumo do pedido
├── components
│   ├── CardProduto.tsx      # card de produto
│   └── BarraBusca.tsx       # campo de busca
├── context
│   └── CarrinhoContext.tsx  # estado global do carrinho
├── data
│   └── produtos.ts          # cardápio
├── tema.ts                  # cores e formatação de preço
└── types.ts                 # tipos Produto e ItemCarrinho
```

## Como executar
```bash
npm install
npx expo start
```
Depois, abra no celular com o app Expo Go (QR Code) ou em um emulador.

## Desenvolvedor
Maria Clara Bezerra Israel