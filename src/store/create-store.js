import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { profileReducer } from "./profile";
import { conversationsReducer } from "./conversations";
import { gistsReducer } from "./gists";
import { messagesReducer } from "./messages";
import {
  logger,
  timeScheduler,
  botMessage,
  crashReporter,
} from "./middlewares";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { getPublicGistsApi, getGistsByNameApi } from "../api/gists";
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["messages"],
  whitelist: ["profile", "conversations"],
};
const api = { getPublicGistsApi, getGistsByNameApi };
const rootReducer = combineReducers({
  profile: profileReducer,
  conversations: conversationsReducer,
  messages: messagesReducer,
  gists: gistsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  compose(
    applyMiddleware(
      thunk.withExtraArgument(api),
      logger,
      timeScheduler,
      botMessage,
      crashReporter
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (args) => args
  )
);

export const persistor = persistStore(store);
