function Input(props) {
  //Componente Input personalizado
  return (
    <input
      className="bg-slate-50 border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
      {...props} // Espalha as props recebidas no elemento input (type, id, placeholder, value, onChange, etc.)
    />
  );
}
export default Input;
