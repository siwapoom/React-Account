import Transaction from "./components/Transaction";
import FormComponent from "./components/FormComponent";
import "./App.css";
import { useEffect, useState } from "react";
import DataContext from "./data/DataContext";
import ReportComponent from "./components/ReportComponent";
import{BrowserRouter as Router,Switch,Route,Link} from "react-router-dom"
function App() {
  const design = { color: "darkcyan", textAlign: "center", fontSize: "3rem" };
  const initData = [
    { id: 1, title: "ค่าเช่าบ้าน", amount: -6500 },
    { id: 2, title: "เงินเดือน", amount: 25000 },
    { id: 3, title: "ค่าอาหาร", amount: -500 },
    { id: 4, title: "ค่าเดินทาง", amount: -2500 },
  ];
  const [items, setItems] = useState(initData); // initstate
  const [reportIncome, setReportIncome] = useState(0);
  const [reportExpense, setReportExpense] = useState(0);
  const onAddNewItem = (newItem) => {
    setItems((prevItem) => {
      return [newItem, ...prevItem];
    });
  };
  useEffect(() => {
    const amounts = items.map((items) => items.amount);
    const income = amounts
      .filter((element) => element > 0)
      .reduce((total, element) => (total += element), 0);
    const expense =
      amounts
        .filter((element) => element < 0)
        .reduce((total, element) => (total += element), 0) * -1;
    setReportIncome(income.toFixed(2));
    setReportExpense(expense.toFixed(2));
  }, [items, reportIncome, reportExpense]);

  return (
    <DataContext.Provider value={{ income: reportIncome, expense: reportExpense }}>
      <div className="container">
        <h1 style={design}>โปรแกรมบัญชีรายรับ - รายจ่าย</h1>
        <br></br>
        <Router>
          <div>
            <ul className="horizontal-menu">
              <li>
                <Link to="/">ข้อมูลบัญชี</Link> 
              </li>
              <li>
                <Link to="/insert">บันทึกข้อมูล</Link> 
              </li>
            </ul>
            <Switch>
              <Route path='/' exact>
                  <ReportComponent/>
              </Route>
              <Route path='/insert'>
                  <FormComponent onAddItem={onAddNewItem}/>
                  <Transaction items={items}/>
              </Route>
            </Switch>
          </div>
        </Router>
    
      
      </div>
    </DataContext.Provider>
  );
}

export default App;
