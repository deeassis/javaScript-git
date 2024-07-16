import { useState } from "react";

export default function CadNew() {
  //Estado inicial do formulario
  const initilForm = {
    nome: "",
    email: "",
  };

  //estado do formulario
  const [formState, setFormState] = useState(initilForm);

  //função para lidar com a alteração dos campos
  const handleInput = (event) => {
    //obter elemento de entrada atual
    const target = event.currentTarget;
    //extrair o valor do campo
    const { value, name } = target;
    //atualizar o estado do formulario
    setFormState({ ...formState, [name]: value });
  };

  //função para lidar com a submissa~p do formulario
  const handleSubmit = (event) => {
    event.preventDefault();

    const formGeneral = {
      nome: formState.nome,
      email: formState.email,
    };

    const requestOption = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formGeneral),
    };

    fetch("http://localhost:7000/news", requestOption)
      .then((response) => response.json())
      .then((data) => {
        //limpar os campos do formulario definindo estado inicial
        setFormState({ ...initilForm });
      });
    console.log(formGeneral);
  };
  return (
    <div className="container mt-4">
      <h2>Novo Cadastro</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            className="form-control"
            name="nome"
            value={formState.nome}
            onChange={handleInput}
            id="nome"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            className="form-control"
            name="email"
            value={formState.email}
            onChange={handleInput}
            id="email"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary mt-3">
          Cadastrar
        </button>
      </form>
    </div>
  );
}
