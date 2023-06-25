import Item from "./Item";
import "./Transaction.css";
// import DataContext from "../data/DataContext";
// import { useContext } from "react";

const Transaction = (props) => {
  const { items } = props;
  // const { income, expense } = useContext(DataContext);
  return (
    <div>
      <ul className="item-list">
        {items.map((element) => {
          return <Item {...element} key={element.id} />;
        })}
      </ul>
      {/* <p>รายรับ : {income} </p>
      <p>รายจ่าย : {expense}</p> */}
    </div>
  );
};

export default Transaction;
