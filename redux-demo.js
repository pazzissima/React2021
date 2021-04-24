const redux = require('redux');

const counterReducer = (state = { counter: 0}, action) => {
	if (action.type === 'increment'){
		return {
			counter: state.counter + 1
		};
	}
	if (action.type === 'decrement'){
		return {
			counter: state.counter - 1
		};
	}

	return state;	
};

//Here we just point to counterReducer, not execute it. It will be executed by Reduc
const store = redux.createStore(counterReducer);

const counterSubscriber = () => {
	const latestState = store.getState();
	console.log(latestState);
};

//Here we just point to counterSubscriber, not execute it. It will be executed by Reduc
store.subscribe(counterSubscriber);

//Dispatch is a method that dispatches an ACTION. An action is a JS object
store.dispatch({ type: 'increment'});
store.dispatch({ type: 'decrement'});