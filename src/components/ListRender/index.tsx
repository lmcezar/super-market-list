import { ListCard } from "../ListCard";
import "./index.css";

interface IItemList {
  _id: string;
  name: string;
  quantity: number;
  checked: boolean;
}

export const ListRender = ({ list }: { list: IItemList[] }) => {
  if (list?.length == 0) {
    return (
      <h3>
        Sua lista está vazia! Clique no botão adicionar para inlcuir novos
        itens!
      </h3>
    );
  }
  return (
    <div className="list-render-container">
      {list.map((item) => (
        <ListCard key={item?._id} item={item} />
      ))}
    </div>
  );
};
