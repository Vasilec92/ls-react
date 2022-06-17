import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";
import {
  MessageList,
  Layout,
  Header,
  ChatList,
  Profile,
  Gists,
} from "./components";
import "./global.css";
import { store, persistor } from "./store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const theme = createTheme({
  myPalette: {
    color: "red",
  },
  palette: {},
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/profile" element={<Profile />} />
              <Route
                path="/chat/*"
                element={
                  <Layout messages={<MessageList />} chats={<ChatList />} />
                }
              />
              <Route path="/" element={<Profile />} />
              <Route path="/gists" element={<Gists />} />
              <Route path="*" element={<h1>404</h1>} />
            </Routes>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
