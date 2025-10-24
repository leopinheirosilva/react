import { useState } from "react"; //Hook useState para gerenciar estado
import Input from "./Input"; //Componente Input personalizado

function AddTask({ addTask }) {
  // Componente AddTask, onde as tarefas são adicionadas, recebendo a função addTask via props
  const [title, setTitle] = useState("");
  // Estado para armazenar o título da nova tarefa
  const [description, setDescription] = useState("");
  // Estado para armazenar a descrição da nova tarefa
  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <Input //Campo de input para o título da tarefa
        id="title"
        type="text"
        placeholder="Digite a tarefa"
        value={title} //Valor do estado do título
        onChange={(event) => setTitle(event.target.value)} //Atualiza o estado do título conforme o usuário digita
      />
      <Input //Campo de input para a descrição da tarefa
        type="text"
        id="description"
        placeholder="Digite a descrição da tarefa"
        value={description} //Valor do estado da descrição
        onChange={(event) => setDescription(event.target.value)} //Atualiza o estado da descrição conforme o usuário digita
      />
      <button
        className="bg-slate-500 text-white px-4 py-3 rounded-md font-medium"
        onClick={() => { //Função para adicionar a nova tarefa
          if (!title.trim() || !description.trim()) {
            //Verifica se o título ou descrição estão vazios
            if (!title.trim()) {
              document.getElementById("title").focus(); //Foca no campo do título se estiver vazio
            } else {
              document.getElementById("description").focus(); //Foca no campo da descrição se estiver vazio
            }
            return;
          }
          addTask(title, description); //Chama a função addTask passada via props, adicionando a nova tarefa
          setTitle(""); //Limpa o campo do título
          setDescription(""); //Limpa o campo da descrição
        }}
      >
        Adicionar Tarefa
      </button>
    </div>
  );
}
export default AddTask;