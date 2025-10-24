import { useState } from "react"; // Importa o Hook useState do React

function States() {
  //State (Estado)
  const [message, setMessage] = useState("Olá, Mundo!"); // React Hook
  return (
    <div>
      <h1>{message}</h1> {/* Comentário JSX */}
      <button
        onClick={() => {
          setMessage("Fui clicado!"); // Atualiza o state
        }}
      >
        Mudar mensagem
      </button>
    </div>
  );
}
export default States;
// Comentários:
// Componente - é uma função que retorna um pedaço de interface (HTML) que pode ser reutilizado
// props - são parâmetros que são passados para os componentes, permitindo que eles sejam configuráveis e reutilizáveis 
// State (Estado) - é uma variável que quando alterada, faz com que o componente seja re-renderizado
// Hook - é uma função especial do React que permite usar recursos do React, como state e lifecycle, em componentes funcionais
// useState - é um Hook que permite adicionar state a um componente funcional
// JSX - é uma sintaxe que permite escrever HTML dentro do JavaScript
// setMessage - é a função que atualiza o state message e faz o componente re-renderizar
// Nunca altere o state diretamente, sempre use a função de atualização (setMessage no caso)
