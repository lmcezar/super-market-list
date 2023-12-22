import { useEffect, useState } from "react";
import { getList } from "../../services/requests";
import { Loader, ListRender, Button, Modal } from "../../components";

import "./index.css";

interface IListItem {
  name: string;
  _id: string;
  quantity: number;
  checked: boolean;
}

export const ListScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const [listItems, setListItems] = useState<IListItem[]>([]);

  const loadListItems = async () => {
    setLoading(true);
    const result = await getList();
    setListItems(result);
    setLoading(false);
  };

  useEffect(() => {
    loadListItems();
  }, []);

  const onClickAddButton = () => {
    setModalVisible(true);
  };

  const onCloseModal = () => {
    setModalVisible(false);
  };

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
            <Button onClick={onClickAddButton}>Adicionar</Button>
          </div>
        </div>

        <div className="list-screen-list-container">
          {loading ? <Loader /> : <ListRender list={listItems} />}
        </div>
      </div>

      {modalVisible && <Modal onClose={onCloseModal} />}
    </div>
  );
};
