import { List, Button } from "@mui/material";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  createConversation,
  deleteConversation,
} from "../../store/conversations";
import { useState, useCallback } from "react";
import { Chat } from "./chat";

export const ChatList = () => {
  const { roomId } = useParams();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const conversations = useSelector(
    (state) => state.conversations.conversations
  );
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
