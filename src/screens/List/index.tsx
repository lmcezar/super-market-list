import { useEffect, useState } from "react";
import { getList } from "../../services/requests";
import { ListCard } from "../../components";

import "./index.css";

interface IListItem {
  name: string;
  _id: string;
}

export const ListScreen = () => {
  const [loading, setLoading] = useState(true);
  const [listItems, setListItems] = useState<IListItem[]>([]);

  const loadListItems = async () => {
    setLoading(true);
    const result = await getList();
    console.log({ result });
    setListItems(result);
    setLoading(false);
  };

  useEffect(() => {
    loadListItems();
  }, []);
  return (
    <div className="list-screen-container">
      <div className="list-screen-content-container">
        <div className="list-screen-header">
          <img
            className="logo-image"
            src="/images/logo.png"
            alt="supermarket-list-logo"
          />
          <h1>Lista Supermercado</h1>
        </div>

        <div className="list-screen-list-container">
          {loading && <h3>Carregando...</h3>}
          {!loading && listItems?.length > 0 ? (
            listItems?.map((item) => <ListCard key={item._id} item={item} />)
          ) : (
            <h3>
              Sua lista está vazia, por favor adicione um novo item clicando no
              botão adicionar
            </h3>
          )}
        </div>
      </div>
    </div>
  );
};
