import { ListCard } from "../ListCard";

interface IItemList {
  _id: string;
  name: string;
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
    <div>
      {list.map((item) => (
        <ListCard key={item?._id} item={item} />
      ))}
    </div>
  );
};
