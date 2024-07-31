import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Slide,
  Stack,
  Typography,
} from "@mui/material";
import { forwardRef } from "react";
import { useSelector } from "react-redux";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const list = [
  {
    key: 0,
    title: "Mark as unread",
    combination: ["Cmd", "Shift", "U"],
  },
  {
    key: 1,
    title: "Mute",
    combination: ["Cmd", "Shift", "M"],
  },
  {
    key: 2,
    title: "Archive Chat",
    combination: ["Cmd", "Shift", "E"],
  },
  {
    key: 3,
    title: "Delete Chat",
    combination: ["Cmd", "Shift", "D"],
  },
  {
    key: 4,
    title: "Pin Chat",
    combination: ["Cmd", "Shift", "P"],
  },
  {
    key: 5,
    title: "Search",
    combination: ["Cmd", "F"],
  },
  {
    key: 6,
    title: "Search Chat",
    combination: ["Cmd", "Shift", "F"],
  },
  {
    key: 7,
    title: "Next Chat",
    combination: ["Cmd", "N"],
  },
  {
    key: 8,
    title: "Next Step",
    combination: ["Ctrl", "Tab"],
  },
  {
    key: 9,
    title: "Previous Step",
    combination: ["Ctrl", "Shift", "Tab"],
  },
  {
    key: 10,
    title: "New Group",
    combination: ["Cmd", "Shift", "N"],
  },
  {
    key: 11,
    title: "Profile & About",
    combination: ["Cmd", "P"],
  },
  {
    key: 12,
    title: "Increase speed of voice message",
    combination: ["Shift", "."],
  },
  {
    key: 13,
    title: "Decrease speed of voice message",
    combination: ["Shift", ","],
  },
  {
    key: 14,
    title: "Settings",
    combination: ["Shift", "S"],
  },
  {
    key: 15,
    title: "Emoji Panel",
    combination: ["Cmd", "E"],
  },
  {
    key: 16,
    title: "Sticker Panel",
    combination: ["Cmd", "S"],
  },
];

export default function Shortcuts({ open, handleClose }) {
  const { mode } = useSelector((state) => state.app);
  return (
    <>
      <Dialog
        fullWidth
        maxWidth="md"
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        sx={{
          p: 4,
        }}
      >
        <DialogTitle
          sx={{
            pb: 4,
            backgroundColor: !mode ? "#fbfaff" : "#161C24",
            color: !mode ? "black" : "white",
          }}
        >
          {"Keyboard Shortcuts"}
        </DialogTitle>
        <DialogContent
          sx={{
            backgroundColor: !mode ? "#fbfaff" : "#161C24",
            color: !mode ? "black" : "white",
          }}
        >
          {/*  */}
          <Grid container spacing={3}>
            {list.map(({ key, title, combination }) => {
              return (
                <Grid item xs={6}>
                  <div
                    className="W-100 d-flex justify-content-between align-items-center gap-3 "
                    key={key}
                  >
                    <h6 style={{ fontSize: 14 }}>{title}</h6>
                    <div className="d-flex gap-2">
                      {combination.map((el) => {
                        return (
                          <Button
                            sx={{ color: "#777 !important" }}
                            disabled
                            variant="contained"
                          >
                            {el}
                          </Button>
                        );
                      })}
                    </div>
                  </div>
                </Grid>
              );
            })}
          </Grid>
        </DialogContent>
        <DialogActions
          sx={{
            backgroundColor: !mode ? "#fbfaff" : "#161C24",
            color: !mode ? "black" : "white",
          }}
        >
          <Button variant={"contained"} onClick={handleClose}>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
