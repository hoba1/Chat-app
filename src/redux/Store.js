import { configureStore } from "@reduxjs/toolkit";
import { useSelector as useAppSelector, useDispatch as useAppDispatch } from "react-redux";
import { persistReducer, persistStore } from "redux-persist";
import { rootPeristConfig, rootReducer } from "./rootReducer";

const store = configureStore({
    reducer: persistReducer(rootPeristConfig, rootReducer),
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({
            serializableCheck: false,
            immutableCheck: false,
    })
});

const persistor = persistStore(store);

const {dispatch} = store;

const useSelector = useAppSelector;

const useDispatch = () => useAppDispatch();

export {store, persistor,dispatch,useSelector,useDispatch}