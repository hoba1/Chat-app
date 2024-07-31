import { faker } from "@faker-js/faker";
import { Avatar, Badge, styled, useTheme } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { SelectConversation } from "../redux/slices/App";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${"#212B36"}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

const ChatElement = ({ id, name, img, msg, time, unread, online }) => {
  const theme = useTheme();
  const dispatch = useDispatch()
  const { mode } = useSelector((state) => state.app);
  return (
    <div
      className="w-100 rounded-4 p-2"
      style={{
        backgroundColor:
          !mode
            ? "#fff"
            : "#212B36",
        color: !mode ? "black" : "white"
      }}
      onClick={() => {
        dispatch(SelectConversation({room_id: id}))
      }}
    >
      <div className="d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center gap-3">
          <div>
            {online ? (
              <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                variant="dot"
              >
                <Avatar src={faker.image.avatar()} />
              </StyledBadge>
            ) : (
              <Avatar src={faker.image.avatar()} />
            )}
          </div>
          <div>
            <h6 className="mb-1 fw-bold">{name}</h6>
            <p className="m-0" style={{ fontSize: "13px" }}>
              {msg}
            </p>
          </div>
        </div>
        <div className="text-center">
          <p className="m-0" style={{ fontWeight: "600", fontSize: "13px" }}>
            {time}
          </p>
          <Badge color="primary" badgeContent={unread}></Badge>
        </div>
      </div>
    </div>
  );
};

export default ChatElement