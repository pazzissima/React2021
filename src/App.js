import Expenses from './components/Expenses';

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
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
