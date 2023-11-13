import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFIlter";
import { useState } from "react";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const [filterInfoText, setFilterInfoText] = useState("2019, 2021 & 2022");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    if (selectedYear === "2019") {
      setFilterInfoText("2020, 2021 & 2022");
    } else if (selectedYear === "2020") {
      setFilterInfoText("2019, 2021 & 2022");
    } else if (selectedYear === "2021") {
      setFilterInfoText("2019, 2020 & 2022");
    } else {
      setFilterInfoText("2019, 2020 & 2021");
    }
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <p>Data for years {filterInfoText} is hidden</p>
      <ExpenseItem
        title={props.item[0].title}
        amount={props.item[0].amount}
        date={props.item[0].date}
      />
      <ExpenseItem
        title={props.item[1].title}
        amount={props.item[1].amount}
        date={props.item[1].date}
      />
      <ExpenseItem
        title={props.item[2].title}
        amount={props.item[2].amount}
        date={props.item[2].date}
      />
      <ExpenseItem
        title={props.item[3].title}
        amount={props.item[3].amount}
        date={props.item[3].date}
      />
    </Card>
  );
};

export default Expenses;
