import { StrictMode } from "react"; //StrictMode do React para ajudar a identificar problemas na aplicação
import { createRoot } from "react-dom/client"; //Importa a função para criar o root da aplicação React
import App from "./App.jsx"; //Importa o componente principal da aplicação
import TaskDetails from "./pages/TaskDetails.jsx"; //Importa a página de detalhes da tarefa
import "./index.css"; //Importa o arquivo CSS global
import { createBrowserRouter, RouterProvider } from "react-router-dom"; //Importa a função para criar o roteador de navegação

const router = createBrowserRouter([
  //Definindo as rotas da aplicação
  {
    // Rota principal
    path: "/",
    element: <App />,
  },
  {
    // Rota para os detalhes da tarefa
    path: "/task-details",
    element: <TaskDetails />,
  }
]);

createRoot(document.getElementById("root")).render( //Renderiza a aplicação React na div com id "root"
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
