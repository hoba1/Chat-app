import { useTheme } from "@emotion/react";
import { IconButton } from "@mui/material";
import { CaretLeft } from "phosphor-react";
import { useDispatch, useSelector } from "react-redux";
import { UpdateSidebarType } from "../redux/slices/App";
import Message from "./conversation/Message";

export default function StarredMessages() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { mode } = useSelector((state) => state.app);

  return (
    <div
      style={{
        width: "320px",
        backgroundColor: !mode ? "#fbfaff" : "#161C24",
        color: !mode ? "black" : "white",
      }}
      className="vh-100"
    >
      <div className="h-100 d-flex flex-column">
        {/* Header */}
        <div
          className="w-100"
          style={{
            boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
          }}
        >
          <div className="h-100 d-flex p-2 align-items-center gap-3">
            <IconButton
              onClick={() => {
                dispatch(UpdateSidebarType("CONTACT"));
              }}
            >
              <CaretLeft style={{color: !mode ? "black" : "white",}}/>
            </IconButton>
            <h6 className="m-0">Starred Messages</h6>
          </div>
        </div>
        {/* Body */}
        <div
          className={`h-100 mw-100 position-relative d-flex flex-column flex-grow-1 overflow-y-scroll p-3 gap-3`}
        >
          <Message />
        </div>
      </div>
    </div>
  );
}
