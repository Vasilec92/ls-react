import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";
import { MessageList, Layout, Header, ChatList, Profile } from "./components";
import "./global.css";

const theme = createTheme({
  myPalette: {
    color: "red",
  },
  palette: {},
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route
            path="/chat/*"
            element={<Layout messages={<MessageList />} chats={<ChatList />} />}
          />
          <Route path="/" element={<Profile />} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
