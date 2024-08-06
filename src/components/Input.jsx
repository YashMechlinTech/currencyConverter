import React, { useId } from "react";

function Input({
  label,
  amount,
  OnAmountChange, // Correct prop name
  OnCurrencyChange, // Correct prop name
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const amountInputId = useId();

  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label
          htmlFor={amountInputId}
          className="text-black/40 mb-2 inline-block"
        >
          {label}
        </label>
        <input
          id={amountInputId}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) => OnAmountChange(Number(e.target.value))} // Correct handler call
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectCurrency}
          onChange={(e) => OnCurrencyChange(e.target.value)} // Correct handler call
          disabled={currencyDisable}
        >
          {currencyOptions.map((val) => (
            <option key={val} value={val}>
              {val}
            </option> // Added key and value
          ))}
        </select>
      </div>
    </div>
  );
}

export default Input;
