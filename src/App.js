import React from "react";
import { ThemeProvider, createTheme } from "@mui/material";
import { MessageList, Layout, Header, ChatList } from "./components";
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
      <Layout
        messages={<MessageList />}
        header={<Header />}
        chats={<ChatList />}
      />
    </ThemeProvider>
  );
}

export default App;
