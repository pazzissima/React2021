import React, { useState } from 'react';

import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

function ExpenseItem(props) {

	const [title, setTitle] = useState(props.exp);
	// useState always returns an array with 2 elements - first one is the current state value, 
	// second is a f-n for updating it


	const clickHandler = () => {
		setTitle('Updated!');
		console.log(title);
	}

	return (
		<Card className="expense-item">
			<ExpenseDate dat={props.dt}/>
			<div className="expense-item__description">
				<h2>{title}</h2>
				<div className="expense-item__price">${props.amt}</div>
			</div>
			<button onClick={clickHandler}>Change title</button>
		</Card>
	)
}

export default ExpenseItem;