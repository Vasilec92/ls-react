import { List, Button } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { Chat } from "./chat";

export const ChatList = () => {
  const [chats] = useState(["room1", "room2", "room3"]);

  const { roomId } = useParams();

  return (
    <List component="nav">
      {chats.map((chat) => (
        <Button fullWidth component={Link} key={chat} to={`/chat/${chat}`}>
          <Chat title={chat} selected={roomId === chat} />
        </Button>
      ))}
    </List>
  );
};
