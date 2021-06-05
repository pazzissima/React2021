import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from './Card';

function Expenses(props) {

	return (
		<Card className="expenses">
		  <ExpenseItem exp={props.items[0].title} amt={props.items[0].amount} dt={props.items[0].date}></ExpenseItem>
	      <ExpenseItem exp={props.items[1].title} amt={props.items[1].amount} dt={props.items[1].date}></ExpenseItem>
	      <ExpenseItem exp={props.items[2].title} amt={props.items[2].amount} dt={props.items[2].date}></ExpenseItem>
		</Card>
	)

}

export default Expenses;