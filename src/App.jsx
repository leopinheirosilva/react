import AddTask from "./components/AddTask"; //Componente AddTask
import Tasks from "./components/Tasks"; //Componente Tasks
import Title from "./components/Title"; //Componente Title
import { useEffect, useState } from "react"; //Hook useState para gerenciar estado e useEffect para efeitos colaterais

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
    /*Estado para armazenar a lista de tarefas, inicializado com os dados do localStorage ou um array vazio*/
  );
  useEffect(() => { //Carrega tarefas de uma API externa quando o componente for montado
    async function fetchTasks() {
      //Função assíncrona para buscar tarefas de uma API externa
        //CHAMAR API
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos?_limit=5",
          //Exemplo de API pública que retorna uma lista de tarefas (todos) com limite de 10 tarefas
          {
            method: "GET", //Método HTTP GET para buscar dados
          }
        );
        //PEGAR OS DADOS QUE ELA RETORNA
        const data = await response.json(); //Converte a resposta em JSON
        //ARMAZENAR/PERSISTIR OS DADOS NO STATE
        setTasks(data); //Atualiza o estado de tasks com os dados recebidos da API
      }
      fetchTasks(); //Chama a função para buscar as tarefas
    }, []);
  useEffect(() => { //Salva a lista de tarefas no localStorage sempre que o estado de tasks for atualizado
    localStorage.setItem("tasks", JSON.stringify(tasks));
    //Converte o array de tarefas em uma string JSON e salva no localStorage
  }, [tasks]);
  function onTaskClick(taskId) { //Função para marcar a tarefa como concluída
    const newTasks = tasks.map((task) => {
      //Percorre a lista de tarefas
      if (task.id === taskId) {
        //Se o id da tarefa for igual ao id da tarefa clicada
        return { ...task, completed: !task.completed }; //Inverte o valor de completed
      }
      return task;
      //Retorna a tarefa sem alterações
    });
    //Atualiza o estado com a nova lista de tarefas
    setTasks(newTasks);
  }
  function deleteTask(taskId) { //Função para deletar a tarefa
    const newTasks = tasks.filter((task) => task.id !== taskId); //Filtra a lista de tarefas, mantendo apenas as tarefas que não foram clicadas
    setTasks(newTasks);
  }
  function addTask(title, description) { //Função para adicionar uma nova tarefa
    const newTask = {
      id: tasks.length + 1, //Gera um id para a nova tarefa
      title: title, //Título da nova tarefa
      description: description, //Descrição da nova tarefa
      completed: false, //A nova tarefa começa como não concluída
    };
    setTasks([...tasks, newTask]); //Adiciona a nova tarefa à lista de tarefas
  }
  return (
    <div className=/*tailwind CSS*/ "w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <Title>Gerenciador de Tarefas</Title>
        <AddTask
          //Componente AddTask, onde as tarefas são adicionadas
          addTask={addTask}
        />
        <Tasks
          //Componente Tasks, onde as tarefas são exibidas e podem ser clicadas e deletadas
          tasks={tasks}
          onTaskClick={onTaskClick}
          deleteTask={deleteTask}
        />
      </div>
    </div>
  );
}
export default App;
