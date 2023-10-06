import React, { useState } from "react";
import styles from "../Conteudo/Conteudo.module.css";

const TelaLogin = () => {
  const [emailSite, setemailSite] = useState("");
  const [senha, setSenha] = useState("");


  let favoritos = [];

  function salvarFavorito() {
    console.log("favoritos>>>:", favoritos);
    console.log("estados>>>:", { setemailSite, setSenha });
    favoritos = [...favoritos, { setemailSite, setSenha }];
    console.log("favoritos 2>>>:", favoritos);

    let email = localStorage.getItem("emailSite");
    if (email == null) alert("usuario não cadastrado");
    
    let senha = localStorage.getItem("senha");
    if (senha == null) alert("usuario não cadastrado");

    localStorage.setItem(
      "favorito",
      JSON.stringify({ setemailSite, setSenha })
    );
  }
  return (
    <>
      {favoritos}
      <div className={styles.area}>
        <form className={styles.formulario}>
          <label>Email</label>
          <h1> {emailSite} </h1>
          <input
            name="email"
            onChange={(evento) => {
              setemailSite(evento.target.value);
            }}
          ></input>
          <br />

          <label>Senha</label>
          <h1>{setSenha}</h1>
          <input
            name="Senha"
            onChange={(evento) => {
              setSenha(evento.target.value);
            }}
          ></input>
          <br />
          <input type="button" value="login" onClick={() => salvarFavorito()} />
          {/* <button onClick={() => salvarFavorito()}>Salvar</button> */}
        </form>
      </div>
    </>
  );
};

export default TelaLogin;
