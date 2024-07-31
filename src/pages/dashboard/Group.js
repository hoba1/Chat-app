import { MagnifyingGlass, Plus } from "phosphor-react";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "../../components/Search";
import { IconButton, Link, Typography, useTheme } from "@mui/material";
import { ChatList } from "../../data";
import ChatElement from "../../components/ChatElement";
import { useSelector } from "react-redux";

export default function Group() {
  const theme = useTheme();
  const { mode } = useSelector((state) => state.app);

  return (
    <>
      <div className="d-flex w-100">
        {/* left */}
        <div
          className="vh-100"
          style={{
            backgroundColor: !mode ? "#fbfaff" : "#161C24",
            width: "320px",
            boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
          }}
        >
          <div
            className="d-flex flex-column gap-2 p-3"
            style={{ maxHeight: "100vh" }}
          >
            <div>
              <h5>Groups</h5>
            </div>
            <div className="w-100">
              <Search
                style={{
                  backgroundColor: !mode ? "#fff" : "#212B36",
                  color: !mode ? "black" : "white",
                }}
              >
                <SearchIconWrapper>
                  <MagnifyingGlass color="#709ce6" />
                </SearchIconWrapper>
                <StyledInputBase placeholder="Search..." />
              </Search>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <Typography variant="subtitle2" component={Link}>
                Create New Group
              </Typography>
              <IconButton>
                <Plus style={{ color: theme.palette.primary.main }} />
              </IconButton>
            </div>
            <hr className="m-0 mb-1" />
            <div className="d-flex flex-column h-100 gap-3 overflow-scroll">
              <div className="d-flex flex-column gap-3">
                <h6 className="mb-2" color="#676767">
                  Pinned
                </h6>
                {ChatList.filter((el) => el.pinned).map((el) => {
                  return <ChatElement {...el} />;
                })}
              </div>
              <div className="d-flex flex-column gap-3 ">
                <h6 className="mb-2" color="#676767">
                  All Groups
                </h6>
                {ChatList.filter((el) => !el.pinned).map((el) => {
                  return <ChatElement {...el} />;
                })}
              </div>
            </div>
          </div>
        </div>
        {/* right */}
      </div>
    </>
  );
}
