import { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { MessageList, ChatList } from "../../components";
import styles from "./layout.module.css";

export const Layout = ({ chats, messages }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const listener = ({ code }) => {
      if (code === "Escape") {
        navigate("/chat");
      }
    };

    document.addEventListener("keydown", listener);

    return () => document.removeEventListener("keydown", listener);
  }, [navigate]);
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className={styles.body}>
            <div className={styles.content}>
              <div className={styles.chats}>{chats}</div>
              <div className={styles.messages}>
                {<h1 style={{ color: "#fff" }}>Выберите чат...</h1>}
              </div>
            </div>
          </div>
        }
      />

      <Route
        path=":roomId"
        element={
          <div className={styles.body}>
            <div className={styles.content}>
              <div className={styles.chats}>{chats}</div>
              <div className={styles.messages}>{messages}</div>
            </div>
          </div>
        }
      />
    </Routes>
  );
};
