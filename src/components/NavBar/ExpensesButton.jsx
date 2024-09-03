import React from "react";
import budget from "../../assets/budget.png";
import { Navigate, useNavigate } from "react-router-dom";

export default function ExpensesButton() {
  const navigate = useNavigate();
  function handleGoToExpenses() {
    navigate("/expenses");
  }

  return (
    <button
      className="bottomNavButton topNavButton"
      onClick={handleGoToExpenses}
    >
      <img src={budget} alt="" />
      <p className="topNavText">Expenses</p>
    </button>
  );
}
