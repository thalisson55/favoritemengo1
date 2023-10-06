import React, { useState } from "react";
import styles from "../Conteudo/Conteudo.module.css";

const CadastroUsuario = () => {
  const [nomePessoa, setnomePessoa] = useState("");
  const [emailSite, setemailSite] = useState("");
  const [nomeSite, setnomeSite] = useState("");
  const [senha, setSenha] = useState("");
  const [confSenha, setConfSenha] = useState("");

  let favoritos = [];

  function salvarFavorito() {
    console.log("favoritos>>>:", favoritos);
    console.log("estados>>>:", {
      nomePessoa,
      emailSite,
      nomeSite,
      senha,
      confSenha,
    });
    favoritos = [
      ...favoritos,
      { setnomePessoa, setemailSite, setnomeSite, setSenha, setConfSenha },
    ];
    console.log("favoritos 2>>>:", favoritos);
    localStorage.setItem(
      "favorito",
      JSON.stringify({
        nomePessoa,
        setemailSite,
        nomeSite,
        setSenha,
        setConfSenha,
      })
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
          <label>Nome</label>
          <h1> {nomePessoa} </h1>

          <input
            name="nomePessoa"
            onChange={(evento) => {
              setnomePessoa(evento.target.value);
            }}
          ></input>
          <br />
          <label>Senha</label>
          <h1> {senha} </h1>

          <input
            name="Senha"
            onChange={(evento) => {
              setSenha(evento.target.value);
            }}
          ></input>
          <br />

          <label>Confirmação da Senha</label>
          <h1>{confSenha}</h1>

          <input
            name="senha"
            onChange={(evento) => {
              setConfSenha(evento.target.value);
            }}
          ></input>
          <br />
          <input
            type="button"
            value="Salvar"
            onClick={() => salvarFavorito()}
          />
          {/* <button onClick={() => salvarFavorito()}>Salvar</button> */}
        </form>
      </div>
    </>
  );
};

export default CadastroUsuario;
