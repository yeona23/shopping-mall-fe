import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	id: '',
	name: '',
	email: '',
	photoURL: '',
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
});

export default userSlice.reducer;
