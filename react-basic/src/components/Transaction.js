import Item from "./Item";
import './Transaction.css'
import{ v4 as uuidv4 } from 'uuid';


const Transaction = () => {
    const data = [
        {title:"ค่ารักษาพยาบาล",amount: 2000},
        {title:"ค่าเดินทาง",amount: 1000},
        {title:"ค่าเช่าโรงแรม",amount: 500},
        {title:"เงินเดือน",amount: 30000},
        {title:"ค่าเบ็ดเตล็ด",amount: 500},
        {title:"ค่าอาหาร",amount: 500}
    ]
    return (
      <ul className="item-list">
        {data.map((element)=>{
            return <Item{...element} key = {uuidv4()}/>
        })}
      </ul>
    );
  }

 export default Transaction;