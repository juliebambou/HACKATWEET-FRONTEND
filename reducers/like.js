import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	value: [],
};

export const likeSlice = createSlice({
	name: 'like',
	initialState,
	reducers: {
		addLike: (state, action) => {
			state.value.push(action.payload);
		},
		removeLike: (state, action) => {
			state.value = state.value.filter(like => like.tweet !== action.payload.tweet);
        }
	},
});

export const { addLike, removeLike } = likeSlice.actions;
export default likeSlice.reducer;
