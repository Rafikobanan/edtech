import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { AppDispatch, RootState } from '../store';
import cookieService from '../../services/cookie';

export type GlobalLanguage = 'en' | 'ru';
type ActiveModal = 'register' | 'construct' | null;

interface GlobalState {
  language: GlobalLanguage;
  activeModal: ActiveModal;
}

const initialState: GlobalState = {
  language: 'en',
  activeModal: null
};

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setLanguage(state, action: PayloadAction<GlobalLanguage>) {
      state.language = action.payload;
    },
    setActiveModal(state, action: PayloadAction<ActiveModal>) {
      state.activeModal = action.payload;
    }
  }
});

export default globalSlice.reducer;

export const { setLanguage, setActiveModal } = globalSlice.actions;

export const changeLanguage = (language: GlobalLanguage) => (dispatch: AppDispatch) => {
  cookieService.setLanguage(language);
  dispatch(setLanguage(language));
};

export const getGlobalLanguage = (state: RootState) => state.global.language;
export const getGlobalActiveModal = (state: RootState) => state.global.activeModal;
