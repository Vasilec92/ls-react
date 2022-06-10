import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import styled from "@emotion/styled";
import styles from "./chat.module.css";
import { useSelector } from "react-redux";
import DeleteForever from "@mui/icons-material/DeleteForever";
const ListItemStyles = styled(ListItem)`
  &.Mui-selected {
    background-color: #2b5278;
  }
  &.Mui-selected:hover {
    background-color: #2b5278;
  }
`;

export function Chat({ title, selected, deleteConversationByName }) {
  const message = useSelector((state) => {
    const messages = state.messages.messages[title] ?? [];

    return messages[messages.length - 1];
  });
  return (
    <ListItemStyles className={styles.item} button={true} selected={selected}>
      <ListItemIcon>
        <AccountCircle fontSize="large" className={styles.icon} />
      </ListItemIcon>
      <div className={styles.description}>
        {message && (
          <ListItemText
            className={styles.text}
            primary={`${message.author}: ${message.message}`}
          />
        )}
      </div>
      <DeleteForever
        sx={{ color: "red", margin: 1 }}
        variant="plain"
        onClick={(e) => deleteConversationByName(title, e)}
      />
    </ListItemStyles>
  );
}
