import Button from "./Button"; //Importa o componente Button
import { ChevronRightIcon, Trash2, CheckIcon } from "lucide-react"; //Ícones do Lucide
import { useNavigate } from "react-router-dom"; //Hook para navegação entre páginas

function Tasks(props) {
  // funcao que utiliza props para receber as tarefas do componente pai (App)
  const navigate = useNavigate(); //Hook para navegação entre páginas
  function goToTaskDetails(task) { //funcao que navega para a página de detalhes da tarefa, passando o título e descrição como parâmetros na URL
    const query = new URLSearchParams(); //Cria um objeto para armazenar os parâmetros da URL
    query.set("title", task.title); //Adiciona o título da tarefa como parâmetro
    query.set("description", task.description); //Adiciona a descrição da tarefa como parâmetro
    navigate(`/task-details?${query.toString()}`); //template string para construir a URL com os parâmetros;
  }
  return (
    <ul
      /*<ul> da lista de tarefas */ className="space-y-4 p-6 bg-slate-200 rounded-md shadow"
    >
      {props.tasks.map((task) => (
        //Percorre a lista de tarefas recebida via props
        <li key={task.id} /*<li> da tarefa {task.id} */ className="flex gap-2">
          <button //botao para marcar a tarefa como concluída
            onClick={() => props.onTaskClick(task.id)} //Chama a função onTaskClick do componente pai (App), passando o id da tarefa clicada
            className={
              `bg-slate-400 w-full flex items-center gap-2 text-white p-2 rounded-md text-left ${
                task.completed ? "line-through" : ""
              }` /*Se a tarefa estiver concluída, aplica a classe line-through, usando um operador ternário */
            }
          >
            {task.completed && <CheckIcon />} {/*Ícone de check se a tarefa estiver concluída */}
            {task.title} {/*exibe o título da tarefa */}
          </button>
          <Button // componente Button para ver os detalhes da tarefa
            onClick={() => {
              goToTaskDetails(task);
              //Executa a função para navegar para os detalhes da tarefa
            }}
          >
            <ChevronRightIcon /> {/*Ícone de seta para a direita */}
          </Button>
          <Button //componente Button para deletar a tarefa
            onClick={() => props.deleteTask(task.id)}
            //Chama a função deleteTask do componente pai (App), passando o id da tarefa clicada
          >
            <Trash2 /> {/*Ícone de lixeira */}
          </Button>
        </li>
      ))}
    </ul>
  );
}
export default Tasks;
