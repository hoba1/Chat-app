import { Button, IconButton } from "@mui/material";
import {
  ArchiveBox,
  CircleDashed,
  MagnifyingGlass,
  Users,
} from "phosphor-react";
import { ChatList } from "../../data";
import { useTheme } from "@emotion/react";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "../../components/Search";
import ChatElement from "../../components/ChatElement";
import { useState } from "react";
import Friends from "../../Sections/main/Friends";
import { useSelector } from "react-redux";

export default function Chats() {
  const [openDialog, setOpenDialog] = useState(false);
  const { mode } = useSelector((state) => state.app);

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  return (
    <>
      <div
        className="position-relative vh-100"
        style={{
          width: "320px",
          backgroundColor: !mode ? "#fbfaff" : "#161C24",
          boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
        }}
      >
        <div className="d-flex flex-column p-3 gap-2 vh-100">
          <div className="d-flex align-items-center justify-content-between">
            <h5 className="m-0" style={{ color: !mode ? "black" : "white" }}>
              Chats
            </h5>
            <div className="d-flex align-items-center gap-1">
              <IconButton onClick={handleOpenDialog}>
                <Users style={{ color: !mode ? "black" : "white" }} />
              </IconButton>
              <IconButton>
                <CircleDashed style={{ color: !mode ? "black" : "white" }} />
              </IconButton>
            </div>
          </div>
          <div className="w-100">
            <Search
              style={{
                backgroundColor: !mode ? "#fff" : "#212B36",
                color: !mode ? "black" : "white"
              }}
            >
              <SearchIconWrapper>
                <MagnifyingGlass color="#709ce6" />
              </SearchIconWrapper>
              <StyledInputBase placeholder="Search..." />
            </Search>
          </div>
          <div className="d-flex flex-column gap-1">
            <div className="d-flex align-items-center gap-2">
              <ArchiveBox
                size={24}
                style={{ color: !mode ? "black" : "white" }}
              />
              <Button>Archive</Button>
            </div>
            <hr style={{ color: !mode ? "black" : "white" }} />
          </div>
          <div className="d-flex flex-column h-100 overflow-scroll">
            <div className="d-flex flex-column gap-3 mb-3">
              <h6 className="mb-2" style={{ color: !mode ? "black" : "white" }}>
                Pinned
              </h6>
              {ChatList.filter((el) => el.pinned).map((el) => {
                return <ChatElement {...el} />;
              })}
            </div>
            <div className="d-flex flex-column gap-3 ">
              <h6 className="mb-2" style={{ color: !mode ? "black" : "white" }}>
                All Chats
              </h6>
              {ChatList.filter((el) => !el.pinned).map((el) => {
                return <ChatElement {...el} />;
              })}
            </div>
          </div>
        </div>
      </div>
      {openDialog && (
        <Friends open={openDialog} handleClose={handleCloseDialog} />
      )}
    </>
  );
}
