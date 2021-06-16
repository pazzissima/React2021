import React from 'react';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const App = () => {
  const expenses = [
  	{
  		id: 'e1',
  		title: 'Car Insurance',
  		amount: 294.67,
  		date: new Date(2021, 5, 22),
  	},
  	{
  		id: 'e2',
  		title: 'New TV',
  		amount: 599.99,
  		date: new Date(2021, 4, 22),
  	},
  	{
  		id: 'e3',
  		title: 'Rent',
  		amount: 1700,
  		date: new Date(2021, 7, 22),
  	}
  ];

  // return React.createElement(
  // 	'div',
  // 	{},
  // 	React.createElement('h2', {}, "Let's get started!"),
  // 	React.createElement(Expenses, {items: expenses})
  // );

  return (
    <div>
      <NewExpense />
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
