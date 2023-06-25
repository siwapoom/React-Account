import { useContext } from "react";
import DataContext from "../data/DataContext";
import './ReportComponent.css'

const ReportComponent = () => {
  const { income, expense } = useContext(DataContext);
  return (
    <div>
      <h4>ยอดคงเหลือ (บาท)</h4>
      <h1>{income-expense}</h1>
        <div className="report-container">
            <div>
                <h4>รายได้ทั้งหมด (บาท)</h4>
                <p className="report gain">{income}</p>
            </div>
            <div>
                <h4>รายจ่ายทั้งหมด (บาท)</h4>
                <p className="report loss">{expense}</p>
            </div>
        </div>
    </div>
  );
};

export default ReportComponent;
