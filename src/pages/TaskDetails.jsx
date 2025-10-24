import { ChevronLeftIcon } from "lucide-react"; //Importa o ícone de seta para a esquerda
import Title from "../components/Title"; //Importa o componente Title
import { useNavigate, useSearchParams } from "react-router-dom"; //Hook para navegar entre as páginas e acessar os parâmetros da URL (query params)

function TaskDetails() {
  const navigate = useNavigate(); //Hook para navegação entre páginas
  const [searchParams] = useSearchParams(); //Hook para acessar os parâmetros da URL
  const title = searchParams.get("title"); //Obtém o valor do parâmetro "title"
  const description = searchParams.get("description"); //Obtém o valor do parâmetro "description"
  return (
    <div className="h-screen w-screen bg-slate-500 p-6">
      <div className="w-[500px] space-y-4 mx-auto">
        <div className="flex justify-center relative mb-6">
          <button //Botão para voltar à página anterior
            onClick={() => navigate(-1) /*Navega para a página anterior*/}
            className="absolute left-0 top-0 bottom-0 text-slate-100"
          >
            <ChevronLeftIcon />
          </button>
          <Title>Detalhes da Tarefa</Title>
        </div>
        <div className="bg-slate-200 p-4 rounded-md">
          <h2 className="text-xl font-bold text-slate-600">{title}</h2>
          <p className="text-slate-600">{description}</p>
        </div>
      </div>
    </div>
  );
}
export default TaskDetails;
