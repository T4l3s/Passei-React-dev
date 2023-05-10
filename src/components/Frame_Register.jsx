import Alert_Error from "./Alert_Error.jsx";
import { Container } from "@mui/system";
import React, { useState } from "react";
import axios from "axios";
import register from "../styles/register.module.css";
import { useNavigate } from "react-router-dom";

export const Frame_Register = () => {
  const [name, setName] = useState("");
  const [login, setLogin] = useState("");
  const [pass, setPass] = useState("");
  const [code, setCode] = useState("");
  const [isShown, setIsShown] = useState(false);
  const [isShownLogin, setIsShowLogin] = useState(false);
  const navigate = useNavigate();

  const navLogin = () => {
    navigate("/login");
  };

  async function handleInput() {
    await axios
      .post("https://b4t9gg-5000.csb.app/register", {
        name: name,
        login: login,
        password: pass,
      })
      .then((res) => {
        setCode(res.data);
        setIsShowLogin(true);
      })
      .catch((err) => {
        console.error(err);
      });
    setIsShown(true);
  }

  return (
    <Container maxWidth="xg">
      <div className={register.Frame}>
        <div className={register.Login}>
          <p className={register.title_register}>Registro</p>
          <input
            className={register.input_register}
            type="text"
            placeholder="Nome"
            onChange={(e) => setName(e.target.value)}
          />
          <br></br>
          <input
            className={register.input_register}
            type="text"
            placeholder="Login"
            onChange={(e) => setLogin(e.target.value)}
          />
          <br></br>
          <input
            className={register.input_register}
            type="password"
            placeholder="Senha"
            onChange={(e) => setPass(e.target.value)}
          />
          <br></br>
          <button
            className={register.btn_register}
            onClick={() => handleInput()}
          >
            Registrar
          </button>
          <br></br>
          {isShownLogin && (
            <a className={register.redirect} onClick={navLogin}>
              Voltar para login ->
            </a>
          )}
        </div>
      </div>
      {isShown && <Alert_Error Notice={code.message} Color={code.resp} />}
    </Container>
  );
};
