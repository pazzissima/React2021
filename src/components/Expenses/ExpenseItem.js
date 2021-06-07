import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

function ExpenseItem(props) {
	const clickHandler = () => {
		console.log('Clicked!!!');
	}

	return (
		<Card className="expense-item">
			<ExpenseDate dat={props.dt}/>
			<div className="expense-item__description">
				<h2>{props.exp}</h2>
				<div className="expense-item__price">${props.amt}</div>
			</div>
			<button onClick={clickHandler}>Change title</button>
		</Card>
	)
}

export default ExpenseItem;