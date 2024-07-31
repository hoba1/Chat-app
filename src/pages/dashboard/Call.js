import { IconButton, Link, Typography, useTheme } from "@mui/material";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "../../components/Search";
import { MagnifyingGlass, Plus } from "phosphor-react";
import { CallLogElement } from "../../components/CallElement";
import { Call_Logs } from "../../data";
import { useState } from "react";
import StartCall from "../../Sections/main/StartCall";
import { useSelector } from "react-redux";

export default function Call() {
  const theme = useTheme();

  const [openDialog, setOpenDialog] = useState(false);

  const { mode } = useSelector((state) => state.app);

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
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
              <h5>Call Log</h5>
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
                Start Conversation
              </Typography>
              <IconButton
                onClick={() => {
                  setOpenDialog(true);
                }}
              >
                <Plus style={{ color: theme.palette.primary.main }} />
              </IconButton>
            </div>
            <hr className="m-0 mb-1" />
            <div className="d-flex flex-column h-100 gap-3 overflow-scroll">
              {/* Call Logs */}
              {Call_Logs.map((el) => (
                <CallLogElement {...el} />
              ))}
            </div>
          </div>
        </div>
        {/* right */}
      </div>
      {openDialog && (
        <StartCall open={openDialog} handleClose={handleCloseDialog} />
      )}
    </>
  );
}
