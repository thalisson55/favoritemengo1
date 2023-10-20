import React, { useState } from "react";
import styles from "./TelaLogin.module.css";

const TelaLogin = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = () => {
    // Lógica de autenticação: aqui você pode verificar o email e a senha,
    // e redirecionar o usuário se a autenticação for bem-sucedida.
    if (email === "seuemail@example.com" && senha === "suasenha123") {
      alert("Login bem-sucedido! Redirecionando...");
      // Adicione código para redirecionar o usuário para outra página.
    } else {
      alert("Email ou senha incorretos. Tente novamente.");
    }
  };

  return (
    <div className={styles.area}>
      <div className={styles.formulario}>
        <h2 className={styles.h2}>Fazer Login</h2>

        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(evento) => setEmail(evento.target.value)}
        />

        <label>Senha</label>
        <input
          type="password"
          value={senha}
          onChange={(evento) => setSenha(evento.target.value)}
        />

        <button type="button" onClick={handleLogin}>
          Entrar
        </button>
      </div>
    </div>
  );
};

export default TelaLogin;
