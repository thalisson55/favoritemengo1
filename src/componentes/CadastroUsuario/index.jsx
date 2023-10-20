import React, { useState } from "react";
import styles from "./Cadastro.module.css";

const CadastroUsuario = () => {
  const [nomePessoa, setNomePessoa] = useState("");
  const [emailSite, setEmailSite] = useState("");
  const [nomeSite, setNomeSite] = useState("");
  const [senha, setSenha] = useState("");
  const [confSenha, setConfSenha] = useState("");
  const [cadastros, setCadastros] = useState([]);

  const handleCadastro = () => {
    if (senha !== confSenha) {
      alert("As senhas não coincidem.");
      return;
    }

    const novoCadastro = {
      nomePessoa,
      emailSite,
      nomeSite,
      senha,
    };

    setCadastros([...cadastros, novoCadastro]);

    setNomePessoa("");
    setEmailSite("");
    setNomeSite("");
    setSenha("");
    setConfSenha("");
  };

  const salvarFavorito = () => {
    localStorage.setItem("cadastros", JSON.stringify(cadastros));
    alert("Cadastro realizado com sucesso!");
  };

  return (
    <div>
      <div className={styles.area}>
        <form className={styles.formulario}>
          <label>Nome</label>
          <br />
          <input
            name="nomePessoa"
            value={nomePessoa}
            onChange={(evento) => setNomePessoa(evento.target.value)}
          />
          <br />

          <label>Email</label>
          <br />
          <input
            name="email"
            value={emailSite}
            onChange={(evento) => setEmailSite(evento.target.value)}
          />
          <br />

          <label>Nome do Site</label>
          <br />
          <input
            name="nomeSite"
            value={nomeSite}
            onChange={(evento) => setNomeSite(evento.target.value)}
          />
          <br />

          <label>Senha</label>
          <br />
          <input
            type="password"
            name="senha"
            value={senha}
            onChange={(evento) => setSenha(evento.target.value)}
          />
          <br />

          <label>Confirmação da Senha</label>
          <br />
          <input
            type="password"
            name="confSenha"
            value={confSenha}
            onChange={(evento) => setConfSenha(evento.target.value)}
          />
          <br />

          <button type="button" onClick={handleCadastro}>
            Cadastrar
          </button>
        </form>
      </div>
      <button onClick={salvarFavorito}>Salvar Cadastros</button>
    </div>
  );
};

export default CadastroUsuario;
