import {createSlice, configureStore} from '@reduxjs/toolkit';

const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
	name: 'counter',
	initialState: initialCounterState,
	reducers: {
		//These are unique action identifiers
		increment(state) {
			//!!! Redux toolkit uses a package that will detect cases like this and 
			//clone state instead of changing the existing one
			//This is mutable-looking way but not mutable
			state.counter++;
		},
		decrement(state) {
			state.counter--;
		},
		increase(state, action) {
			//payload is the name of a variable that will hold any extra data you might be dispatching
			state.counter = state.counter + action.payload;
		},
		toggleCounter(state) {
			state.showCounter = !state.showCounter;
		}
	}
});


const initialAuthState = {
	isAuthenticated: false
}

const authSlice = createSlice({
	name: 'auth',
	initialState:  initialAuthState,
	reducers: {
		login(state) {
			state.isAuthenticated = true;
		},
		logout(state) {
			state.isAuthenticated = false;
		}
	}
})

const store = configureStore({
	reducer: {
		counter: counterSlice.reducer,
		auth: authSlice.reducer
	}
})

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;





