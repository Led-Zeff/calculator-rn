import { useState } from 'react';

const numberExp = /^-?([1-9]\d*|0?)(\.\d*)?$/;
type Operator = '/' | 'x' | '-' | '+';

export const useCalculator = () => {
  const [formula, setFormula] = useState('');
  const [history, setHistory] = useState<
    { num1: number; num2?: number; operator?: Operator }[]
  >([]);
  const [operation, setOperation] = useState<Operator>();

  const clear = () => {
    setFormula('');
    setHistory([]);
    setOperation(undefined);
  };

  const appendNumber = (text: string) => {
    const newVal = formula + text;
    if (numberExp.test(newVal)) {
      setFormula(formula + text);
    } else if (formula === '0') {
      setFormula(text);
    }
  };

  const togglePositive = () => {
    if (formula.startsWith('-')) {
      setFormula(formula.substr(1));
    } else {
      setFormula('-' + formula);
    }
  };

  const del = () => {
    if (/^-\d$/.test(formula)) {
      setFormula('');
    } else if (formula.length > 0) {
      setFormula(formula.slice(0, -1));
    }
  };

  const applyOperation = (operator: Operator) => {
    if (formula === '' || formula === '.') {
      if (formula === '') {
        setOperation(operator);
      }
      return;
    }

    history.push({ num1: getValidNumber(formula) });
    setHistory([...history]);
    setFormula('');
    setOperation(operator);
  };

  const calculate = () => {
    if (
      formula === '' ||
      formula === '.' ||
      operation === undefined ||
      history.length === 0
    ) {
      return;
    }

    const latest = history[history.length - 1];
    const num = getValidNumber(formula);
    let result: number = 0;
    switch (operation) {
      case '+':
        result = latest.num1 + num;
        break;
      case '-':
        result = latest.num1 - num;
        break;
      case '/':
        result = latest.num1 / num;
        break;
      case 'x':
        result = latest.num1 * num;
    }

    latest.operator = operation;
    latest.num2 = num;

    setFormula(result.toString());
    setOperation(undefined);
  };

  function getValidNumber(num: string) {
    return Number(num.endsWith('.') ? num.slice(0, -1) : num);
  }

  return {
    clear,
    appendNumber,
    togglePositive,
    del,
    applyOperation,
    calculate,
    history,
    operation,
    formula,
  };
};
