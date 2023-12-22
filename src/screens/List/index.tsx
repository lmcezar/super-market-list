import { useEffect, useState } from "react";
import { getList } from "../../services/requests";
import { ListCard, Loader, ListRender, Button } from "../../components";

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
          <div className="list-screen-title-container">
            <img
              className="logo-image"
              src="/images/logo.png"
              alt="supermarket-list-logo"
            />
            <h1 className="list-screen-header-title">Lista Supermercado</h1>
          </div>
          <div className="list-screen-header-button-container">
            <Button>Adicionar</Button>
          </div>
        </div>

        <div className="list-screen-list-container">
          {loading ? <Loader /> : <ListRender list={listItems} />}
        </div>
      </div>
    </div>
  );
};
