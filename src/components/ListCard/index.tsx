import "./index.css";

interface IItemProps {
  item: {
    name: string;
    _id: string;
    checked: boolean;
  };
}
export const ListCard = (props: IItemProps) => {
  const { item } = props;
  return (
    <div className="list-card-container">
      <img
        className="checkbox"
        src={`/images/${item?.checked ? "checked.svg" : "unchecked.svg"}`}
        alt="checked-item"
      />
      <span>{props.item.name}</span>
    </div>
  );
};
