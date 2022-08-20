
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import shooterReducer from "./positionSlice";

const rootReducer = combineReducers({
    shooter: shooterReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];


