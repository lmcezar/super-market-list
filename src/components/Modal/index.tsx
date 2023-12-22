import { useState } from "react";
import { Input } from "../Input";
import { Button } from "../Button";

import "./index.css";

interface IModalProps {
  onClose: () => void;
}
export const Modal = ({ onClose }: IModalProps) => {
  const [name, setName] = useState<number | string>("");
  const [quantity, setQuantity] = useState<number | string>(0);

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h1>Adicionar novo item</h1>
          <button onClick={onClose} className="modal-close-button" />
        </div>
        <Input
          handleChange={(text) => setName(text)}
          value={name}
          label="Nome"
          placeholder="Ex: Arroz"
          type="text"
        />
        <Input
          handleChange={(text) => setQuantity(text)}
          value={quantity}
          label="Quantidade"
          type="number"
        />
        <div className="modal-spacer"></div>
        <Button onClick={() => {}}>Adicionar</Button>
      </div>
    </div>
  );
};
