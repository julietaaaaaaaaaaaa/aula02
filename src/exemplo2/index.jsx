import { useEffect, useState } from "react";

export default function App() {
  
  const [Usuario, setUsuario] = useState([]);

  useEffect(() => { 

    const buscarUsuario  = async () => {
    const resposta = await fetch('https://jsonplaceholder.typicode.com/todos');
    const dados =  await resposta.json();            ;
    setUsuario(dados);
    }
    buscarUsuario();
  }, []);

  return (
    <>
      <h1>Usuário</h1>

      <ul>
      {Usuario.map(produto => (
          <li key={produto.userId}>
            <p>{produto.id}</p>
            <p>{produto.title}</p>
            <p>{produto.completed}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
