import Alert_Error from "./Alert_Error.jsx";
import { useSignIn } from "react-auth-kit";
import { Container } from "@mui/system";
import React, { useState } from "react";
import axios from "axios";
import login from "../styles/login.module.css";
import { useNavigate } from "react-router-dom";

export const Frame_Login = () => {
  const [log, setLog] = useState("");
  const [pass, setPass] = useState("");
  const [code, setCode] = useState("");
  const [token, setToken] = useState("");
  const [isShown, setIsShown] = useState(false);
  const navigate = useNavigate();
  const signIn = useSignIn();

  const navHome = () => {
    navigate("/");
  };

  const SignUp = () => {
    navigate("/register");
  };

  async function handleInput() {
    await axios
      .post("https://b4t9gg-5000.csb.app/login", {
        login: log,
        password: pass,
      })
      .then((res) => {
        setCode(res.data);
        signIn({
          token: res.data.token_access,
          expiresIn: 3600,
          tokenType: "Bearer",
          authState: { login: log },
        });
      })
      .catch((err) => {
        console.error(err);
      });
    setIsShown(true);
    setTimeout(navHome(), 10000);
  }

  return (
    <Container maxWidth="xg">
      <div className={login.Frame}>
        <div className={login.Login}>
          <p className={login.title_login}>Fazer Login</p>
          <input
            className={login.input_login}
            type="text"
            placeholder="Login"
            onChange={(e) => setLog(e.target.value)}
          />
          <br></br>
          <input
            className={login.input_login}
            type="password"
            placeholder="Senha"
            onChange={(e) => setPass(e.target.value)}
          />
          <br></br>
          <button className={login.btn_login} onClick={() => handleInput()}>
            Login
          </button>
          <p className={login.SignUp}>
            Não tem uma conta{" "}
            <a className={login.a_signup} onClick={() => SignUp()}>
              registre-se
            </a>
          </p>
        </div>
      </div>
      {isShown && <Alert_Error Notice={code.message} Color={code.resp} />}
    </Container>
  );
};
