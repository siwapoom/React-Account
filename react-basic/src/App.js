import Transaction from "./components/Transaction";
import FormComponent from "./components/FormComponent";
import "./App.css";
import {useEffect, useState } from "react";
import DataContext from "./data/DataContext";
import ReportComponent from "./components/ReportComponent";
function App() {
  const design = { color: "darkcyan", textAlign: "center", fontSize: "3rem" };
  const initState = [
    {id:1,title:'ค่าเช่าบ้าน',amount:-6500},
    {id:2,title:'เงินเดือน',amount:25000},
    {id:3,title:'ค่าอาหาร',amount:-500},
    {id:4,title:'ค่าเดินทาง',amount:-2500}
  ]
  const [items, setItems] = useState(initState);
  const [reportIncome,setReportIncome] = useState(0);
  const [reportExpense,setReportExpense] = useState(0);
  const onAddNewItem = (newItem) => {
    setItems((prevItem) => {
      return [newItem, ...prevItem];
    });
  };
  useEffect(()=>{
    const amounts =items.map(items=>items.amount)
    const income = amounts.filter(element=>element>0).reduce((total,element)=>total+=element,0)
    const expense = (amounts.filter(element=>element<0).reduce((total,element)=>total+=element,0))*-1
    setReportIncome(income)
    setReportExpense(expense)
  },[items,reportIncome,reportExpense])
  return (
    <DataContext.Provider value={
      {
        income: reportIncome,
        expense: reportExpense
      }
    }>
      <div className="container">
        <h1 style={design}>โปรแกรมบัญชีรายรับ - รายจ่าย</h1>
        <ReportComponent />
        <FormComponent onAddItem={onAddNewItem} />
        <Transaction items={items} />
      </div>
    </DataContext.Provider>
  );
}

export default App;
