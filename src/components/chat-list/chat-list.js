import { useEffect } from "react";
import { List, Button } from "@mui/material";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  createConversation,
  deleteConversation,
} from "../../store/conversations";
import { useState, useCallback } from "react";
import { Chat } from "./chat";
import { getConversations } from "../../store/conversations";
import { getMessages } from "../../store/messages";

export const ChatList = () => {
  const { roomId } = useParams();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const conversations = useSelector(
    (state) => state.conversations.conversations
  );
  const messages = useSelector((state) => state.messages.messages);

  const createConversationByName = () => {
    const name = prompt("Введите название комнаты");
    const isValidName = !conversations.includes(name);

    if (!!name && isValidName) {
      dispatch(createConversation(name));
    } else {
      alert("Не валидная комната");
    }
  };

  const deleteConversationByName = useCallback(
    (conversation, e) => {
      e.preventDefault();
      dispatch(deleteConversation(conversation));
      navigate("/chat");
    },
    [dispatch, navigate]
  );

  useEffect(() => {
    if (!conversations.length) {
      dispatch(getConversations());
    }
  }, [dispatch, conversations]);

  useEffect(() => {
    if (!Object.keys(messages).length) {
      dispatch(getMessages());
    }
  }, [dispatch, messages]);
  return (
    <>
      <Button
        onClick={createConversationByName}
        variant="contained"
        sx={{ margin: 2, width: "90%" }}
      >
        create room
      </Button>
      <List component="nav">
        {conversations.map((chat) => (
          <Button fullWidth component={Link} key={chat} to={`/chat/${chat}`}>
            <Chat
              deleteConversationByName={deleteConversationByName}
              title={chat}
              selected={roomId === chat}
            />
          </Button>
        ))}
      </List>
    </>
  );
};
