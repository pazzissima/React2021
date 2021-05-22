import './ExpenseItem.css';

function ExpenseItem(props) {
	const month = props.dt.toLocaleString('en-US', {month: 'long'});
	const day = props.dt.toLocaleString('en-US', {day: '2-digit'});
	const year = props.dt.getFullYear();

	return (
		<div className="expense-item">
			<div>
				<div>{month}</div>
				<div>{year}</div>
				<div>{day}</div>
			</div>
			<div className="expense-item__description">
				<h2>{props.exp}</h2>
				<div className="expense-item__price">${props.amt}</div>
			</div>
		</div>
	)
}

export default ExpenseItem;