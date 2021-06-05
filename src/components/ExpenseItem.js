import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from './Card';

function ExpenseItem(props) {
	

	return (
		<Card className="expense-item">
			<ExpenseDate dat={props.dt}/>
			<div className="expense-item__description">
				<h2>{props.exp}</h2>
				<div className="expense-item__price">${props.amt}</div>
			</div>
		</Card>
	)
}

export default ExpenseItem;