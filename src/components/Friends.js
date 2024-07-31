import {
  Avatar,
  Box,
  Button,
  IconButton,
  styled,
  useTheme,
} from "@mui/material";
import StyleBadge from "./StyleBadge";
import { Chat } from "phosphor-react";
import { useSelector } from "react-redux";

const StyledChatBox = styled(Box)(({ theme }) => ({
  "&:hover": {
    Cursor: "pointer",
  },
}));

const UserComponent = ({ name, id, online, img }) => {
  const theme = useTheme();
  const { mode } = useSelector((state) => state.app);
  return (
    <StyledChatBox
      className="w-100 p-2 rounded-1"
      sx={{
        backgroundColor: !mode ? "#fbfaff" : "#161C24",
        color: !mode ? "black" : "white",
      }}
    >
      <div className="d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center gap-2">
          {" "}
          {online ? (
            <StyleBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
            >
              <Avatar src={img} alt={name} />
            </StyleBadge>
          ) : (
            <Avatar src={img} alt={name} />
          )}
          <div>
            <p className="m-0">{name}</p>
          </div>
        </div>
        <div className="d-flex align-items-center gap-2">
          <Button>Send Request</Button>
        </div>
      </div>
    </StyledChatBox>
  );
};

const FriendComponent = ({ name, online, img }) => {
  const theme = useTheme();
  const { mode } = useSelector((state) => state.app);
  return (
    <StyledChatBox
      className="w-100 p-2 rounded-1"
      sx={{
        backgroundColor: !mode ? "#fbfaff" : "#161C24",
        color: !mode ? "black" : "white",
      }}
    >
      <div className="d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center gap-2">
          {" "}
          {online ? (
            <StyleBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
            >
              <Avatar src={img} alt={name} />
            </StyleBadge>
          ) : (
            <Avatar src={img} alt={name} />
          )}
          <div>
            <p className="m-0">{name}</p>
          </div>
        </div>
        <div className="d-flex align-items-center gap-2">
          <IconButton>
            <Chat
              style={{
                color: !mode ? "black" : "white",
              }}
            />
          </IconButton>
        </div>
      </div>
    </StyledChatBox>
  );
};

const FriendRequestComponent = ({ name, online, img, id }) => {
  const theme = useTheme();
  const { mode } = useSelector((state) => state.app);
  return (
    <StyledChatBox
      className="w-100 p-2 rounded-1"
      sx={{
        backgroundColor: !mode ? "#fbfaff" : "#161C24",
        color: !mode ? "black" : "white",
      }}
    >
      <div className="d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center gap-2">
          {" "}
          {online ? (
            <StyleBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
            >
              <Avatar src={img} alt={name} />
            </StyleBadge>
          ) : (
            <Avatar src={img} alt={name} />
          )}
          <div>
            <p className="m-0">{name}</p>
          </div>
        </div>
        <div className="d-flex align-items-center gap-2">
          <Button>Accept Request</Button>
        </div>
      </div>
    </StyledChatBox>
  );
};

export { UserComponent, FriendRequestComponent, FriendComponent };
