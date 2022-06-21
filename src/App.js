import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";
import {
  MessageList,
  Layout,
  Header,
  ChatList,
  Profile,
  Gists,
  PrivateRoute,
  PublicRoute,
  LoginPage,
  SignUpPage,
} from "./components";
import "./global.css";
import { store, persistor } from "./store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./api/firebase";

const theme = createTheme({
  myPalette: {
    color: "red",
  },
  palette: {},
});

function App() {
  const [session, setSession] = useState(null);
  const isAuth = !!session;

  useEffect(() => {
    // @TODO  перенести в санк
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setSession(user);
      } else {
        setSession(null);
      }
    });
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route
                path="/profile"
                element={
                  <PrivateRoute isAuth={isAuth}>
                    <Profile />
                  </PrivateRoute>
                }
              />
              <Route
                path="/chat/*"
                element={
                  <PrivateRoute isAuth={isAuth}>
                    <Layout messages={<MessageList />} chats={<ChatList />} />
                  </PrivateRoute>
                }
              />
              <Route path="/" element={<LoginPage />} />
              <Route
                path="/gists"
                element={
                  <PrivateRoute isAuth={isAuth}>
                    <Gists />
                  </PrivateRoute>
                }
              />
              <Route
                path="/sign-up"
                element={
                  <PublicRoute isAuth={isAuth}>
                    <SignUpPage />
                  </PublicRoute>
                }
              />
              <Route
                path="/login"
                element={
                  <PublicRoute isAuth={isAuth}>
                    <LoginPage />
                  </PublicRoute>
                }
              />
              <Route path="*" element={<h1>404</h1>} />
            </Routes>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
