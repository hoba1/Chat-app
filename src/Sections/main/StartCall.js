import { Dialog, DialogContent, DialogTitle, Slide } from "@mui/material";
import React from "react";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "../../components/Search";
import { MagnifyingGlass } from "phosphor-react";
import { CallElement } from "../../components/CallElement";
import { Members_List } from "../../data";
import { useSelector } from "react-redux";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function StartCall({ open, handleClose }) {
  const { mode } = useSelector((state) => state.app);
  return (
    <Dialog
      fullWidth
      maxWidth="xs"
      open={open}
      TransitionComponent={Transition}
      keepMounted
      sx={{ p: 4 }}
      onClose={handleClose}
    >
      {/* Title */}
      <DialogTitle
        sx={{
          pb: 3,
          backgroundColor: !mode ? "#fbfaff" : "#161C24",
          color: !mode ? "black" : "white",
        }}
      >
        Start Call
      </DialogTitle>
      {/* Content */}
      <DialogContent
        sx={{
          backgroundColor: !mode ? "#fbfaff" : "#161C24",
          color: !mode ? "black" : "white",
        }}
      >
        <div className="d-flex flex-column gap-3">
          <div className="w-100">
            <Search
              sx={{
                backgroundColor: !mode ? "#fbfaff" : "#161C24",
                color: !mode ? "black" : "white",
              }}
            >
              <SearchIconWrapper>
                <MagnifyingGlass color="#709ce6" />
              </SearchIconWrapper>
              <StyledInputBase placeholder="Search..." />
            </Search>
          </div>
          {/* Call List */}
          {Members_List.map((el) => (
            <CallElement {...el} />
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
