import Cookies from 'js-cookie';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppDispatch, RootState } from '../store';

type GlobalLanguage = 'en' | 'ru';

interface GlobalState {
  language: GlobalLanguage;
}

const initialState: GlobalState = {
  language: 'en'
};

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setLanguage(state, action: PayloadAction<GlobalLanguage>) {
      state.language = action.payload;
    }
  }
});

export default globalSlice.reducer;

export const getGlobalLanguage = (state: RootState) => state.global.language;

export const globalActionCreators = {
  ...globalSlice.actions,
  changeLanguage: (language: GlobalLanguage) => (dispatch: AppDispatch) => {
    Cookies.set('language', language);
    dispatch(globalActionCreators.setLanguage(language));
  }
};
