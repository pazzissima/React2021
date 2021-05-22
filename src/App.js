import ExpenseItem from './components/ExpenseItem';

function App() {
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


  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem exp={expenses[0].title} amt={expenses[0].amount} dt={expenses[0].date}></ExpenseItem>
      <ExpenseItem exp={expenses[1].title} amt={expenses[1].amount} dt={expenses[1].date}></ExpenseItem>
      <ExpenseItem exp={expenses[2].title} amt={expenses[2].amount} dt={expenses[2].date}></ExpenseItem>
    </div>
  );
}

export default App;
