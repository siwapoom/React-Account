import Transaction from "./components/Transaction";
import './App.css'

function App() {
  const design = {color:'darkcyan',textAlign:'center',fontSize:'3rem'}
  return (
    <div className="container">
      <h1 style={design}>โปรแกรมบัญชีรายรับ - รายจ่าย</h1>
      <Transaction />
    </div>
  );
}

export default App;
