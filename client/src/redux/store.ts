import { configureStore } from '@reduxjs/toolkit'; // tao ra 1 store luu tru redux, luu tru toan bo trang thai cua ung dung
import { persistStore, persistReducer } from 'redux-persist'; // luu tru trang thai cua stroe vao localstorage
import storage from 'redux-persist/lib/storage'; // xac dinh noi luu tru du lieu la local storage
import { combineReducers } from 'redux'; // ket hop nhieu reducer thanh 1 reducer goc
import userReducer from './slices/userSlice';

const persistConfig = {
    key: 'root',
    storage,
}
// ket hop userreducer voi cac reducer khac neu co trong tuonglai
const rootReducer = combineReducers({
    user: userReducer,
})
// quan rootreducer = cau hinh persist de luu tru trang thai
const persistedReducer = persistReducer(persistConfig, rootReducer);

// khoi tao store redux voi persistedReducer
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: false,
        }),
});

export const persistor = persistStore(store); // quan li qua trinh luu tru ban instance nay

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;