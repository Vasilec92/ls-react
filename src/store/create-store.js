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
import { getPublicGistsApi, getPublicGistsApiName } from "../api/gists";
import thunk from "redux-thunk";
import {
  getConversationsApi,
  createConversationApi,
  removConversationApi,
} from "../api/conversations";
import { createMessageApi, getMessagesApi } from "../api/messages";
const persistConfig = {
  key: "root",
  storage,
  blacklist: ["messages"],
  whitelist: ["profile", "conversations"],
};

const api = {
  getPublicGistsApi,
  getPublicGistsApiName,
  getConversationsApi,
  createConversationApi,
  removConversationApi,
  createMessageApi,
  getMessagesApi,
};
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
