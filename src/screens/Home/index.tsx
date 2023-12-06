import { useState } from "react";
import { Button, Input } from "../../components";
import "./index.css";

export const HomeScreen = () => {
  const [username, setUsername] = useState<string>();

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
          handleUsernameChange={(text: string) => setUsername(text)}
          value={username}
          label="Username"
          placeholder="Ex: usuario1"
        />
        <div className="home-screen-button-container">
          <Button>Continuar</Button>
        </div>
      </div>
    </div>
  );
};
