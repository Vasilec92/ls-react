import classNames from "classnames";
import { format } from "date-fns";
import styles from "./message.module.css";
import { useDispatch } from "react-redux";
import { deleteMessage } from "../../../store/messages";
import DeleteForever from "@mui/icons-material/DeleteForever";

export function Message({ message, roomId }) {
  const dispatch = useDispatch();
  return (
    <div
      className={classNames(styles.message, {
        [styles.currentMessage]: message.author === "User",
      })}
    >
      <div className={classNames(styles.delate)}>
        <DeleteForever
          sx={{ color: "red" }}
          variant="plain"
          onClick={() => dispatch(deleteMessage(roomId, message.id))}
        />
      </div>

      <h3>{message.message}</h3>
      <p>{message.author}</p>
      <p>{format(message?.date, "yyyy-MM-dd HH:MM:ss")}</p>
    </div>
  );
}
