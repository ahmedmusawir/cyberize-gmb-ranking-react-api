import { configureStore } from '@reduxjs/toolkit';
import { rankingApi } from '../services/rankingApi';

export default configureStore({
  reducer: {
    [rankingApi.reducerPath]: rankingApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([rankingApi.middleware]),
});
