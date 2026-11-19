import { Stack } from 'expo-router'; // Stack é a navegação em pilha (uma tela sobre a outra)
import { cores } from '../tema'; // cores do app
import { CarrinhoProvider } from '../context/CarrinhoContext'; // "empresta" o carrinho a todas as telas

export default function RootLayout() { // layout geral do app
  return (
    <CarrinhoProvider>
      <Stack
        screenOptions={{ // estilo do cabeçalho de todas as telas
          headerStyle: { backgroundColor: cores.primaria }, // barra de cima rosa
          headerTintColor: cores.branco, // setinha e título brancos
          headerTitleStyle: { fontWeight: 'bold' }, // título em negrito
        }}
      >
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="cardapio" options={{ title: 'Cardápio' }} />
        <Stack.Screen name="carrinho" options={{ title: 'Meu carrinho' }} />
        <Stack.Screen name="confirmacao" options={{ title: 'Confirmação', headerBackVisible: false }} />
      </Stack>
    </CarrinhoProvider>
  );
}