import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  const month = props.date.toLocaleString("ko-US", { month: "long" });
  const year = props.date.getFullYear();
  const day = props.date.toLocaleString("ko-US", { day: "2-digit" });
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__yea">{year}년</div>
      <div className="expense-date__da">{day}</div>
    </div>
  );
};

export default ExpenseDate;
