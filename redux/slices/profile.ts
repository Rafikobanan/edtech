import { createSlice } from '@reduxjs/toolkit';

interface ProfileState {
  email: string | null;
  name: string | null;
  lastName: string | null;
}

const initialState: ProfileState = {
  email: null,
  name: null,
  lastName: null
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {}
});

export default profileSlice.reducer;
