import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props) {
	

	return (
		<div className="expense-item">
		<ExpenseDate dat={props.dt}/>
			<div className="expense-item__description">
				<h2>{props.exp}</h2>
				<div className="expense-item__price">${props.amt}</div>
			</div>
		</div>
	)
}

export default ExpenseItem;