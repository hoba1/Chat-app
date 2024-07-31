import { CaretDown, MagnifyingGlass, Phone, VideoCamera } from "phosphor-react";
import { faker } from "@faker-js/faker";
import { useTheme } from "@emotion/react";
import { Avatar, Divider, IconButton } from "@mui/material";
import StyledBadge from "../StyleBadge";
import { ToggleSidebar } from "../../redux/slices/App";
import { useDispatch, useSelector } from "react-redux";

export default function Header() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { mode } = useSelector((state) => state.app);
  return (
    <div
      className="w-100 py-3 px-4"
      style={{
        backgroundColor: !mode ? "#fbfaff" : "#161C24",
        boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
        color: !mode ? "black" : "white",
      }}
    >
      <div className="d-flex align-items-center justify-content-between h-100 w-100 ">
        <div className="d-flex gap-3">
          <div
            onClick={() => {
              dispatch(ToggleSidebar());
            }}
          >
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
            >
              <Avatar alt={faker.name.fullName()} src={faker.image.avatar()} />
            </StyledBadge>
          </div>
          <div>
            <h6 className="m-0">{faker.name.fullName()}</h6>
            <p className="m-0">Online</p>
          </div>
        </div>
        <div className="d-flex align-items-center gap-3">
          <IconButton>
            <VideoCamera style={{ color: !mode ? "black" : "white" }} />
          </IconButton>
          <IconButton>
            <Phone style={{ color: !mode ? "black" : "white" }} />
          </IconButton>
          <IconButton>
            <MagnifyingGlass style={{ color: !mode ? "black" : "white" }} />
          </IconButton>
          <Divider
            orientation="vertical"
            flexItem
            style={{ backgroundColor: !mode ? "black" : "white" }}
          />
          <IconButton>
            <CaretDown
              style={{ color: !mode ? "black" : "white" }}
              onClick={() => {
                dispatch(ToggleSidebar());
              }}
            />
          </IconButton>
        </div>
      </div>
    </div>
  );
}
