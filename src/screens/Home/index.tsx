import { useState } from "react";
import { Button, Input } from "../../components";
import { useNavigate } from "react-router-dom";
import { SAVE_USERNAME_PATH } from "../../services/constants";

import "./index.css";

export const HomeScreen = () => {
  const [username, setUsername] = useState<string>("");
  const navigate = useNavigate();

  const onClickContinue = () => {
    if (username?.length < 3) {
      alert("Username deve conter mais que 3 caracteres!");
      return;
    }

    localStorage.setItem(SAVE_USERNAME_PATH, username);
    navigate("/list");
  };

  return (
    <div className="home-screen-container">
      <div className="home-screen-content-container">
        <img className="shoping-bag-image" src="/images/shopping-bag.svg" />
        <h1 className="home-screen-title">
          Sua lista de supermercado mais fácil do que nunca
        </h1>
        <h3 className="home-screen-subtitle">
          Ajudamos você a organizar sua lista de compras de forma descomplicada.
        </h3>
        <h3 className="home-screen-subtitle-description">
          Digite abaixo seu usuário para ter acesso a sua lista de compras:
        </h3>
        <Input
          handleChange={(text: string) => setUsername(text)}
          value={username}
          label="Username"
          placeholder="Ex: usuario1"
          type="text"
        />
        <div className="home-screen-button-container">
          <Button onClick={onClickContinue}>Continuar</Button>
        </div>
      </div>
    </div>
  );
};
