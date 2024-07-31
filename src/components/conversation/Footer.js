import { useTheme } from "@emotion/react";
import {
  Fab,
  IconButton,
  InputAdornment,
  TextField,
  Tooltip,
  styled,
} from "@mui/material";
import {
  Camera,
  File,
  Image,
  LinkSimple,
  PaperPlaneTilt,
  Smiley,
  Sticker,
  User,
} from "phosphor-react";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import { useState } from "react";
import { useSelector } from "react-redux";

const StyledInput = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-input": {
    paddingTop: "12px",
    paddingBottom: "12px",
  },
}));

const Actions = [
  {
    color: "#4da5fe",
    icon: <Image size={24} />,
    y: 102,
    title: "Photo/Video",
  },
  {
    color: "#1b8cfe",
    icon: <Sticker size={24} />,
    y: 172,
    title: "Stickers",
  },
  {
    color: "#0172e4",
    icon: <Camera size={24} />,
    y: 242,
    title: "Image",
  },
  {
    color: "#0159b2",
    icon: <File size={24} />,
    y: 312,
    title: "Document",
  },
  {
    color: "#013f7f",
    icon: <User size={24} />,
    y: 382,
    title: "Contact",
  },
];

const ChatInput = ({ setOpenPicker }) => {
  const [openActions, setOpenActions] = useState(false);
  const { mode } = useSelector((state) => state.app);
  return (
    <StyledInput
      fullWidth
      placeholder="Write a Message..."
      variant="filled"
      sx={{ backgroundColor: !mode ? "#fff" : "#212B36" , color: "white"}}
      InputProps={{
        disableUnderline: true,
        startAdornment: (
          <div style={{ width: "max-content" }}>
            <div
              className={`position-relative d-${
                openActions ? "inline" : "none"
              }`}
            >
              {Actions.map((el) => {
                return (
                  <Tooltip placement="right" title={el.title}>
                    <Fab
                      className="position-absolute"
                      style={{ top: -el.y, backgroundColor: el.color }}
                    >
                      {el.icon}
                    </Fab>
                  </Tooltip>
                );
              })}
            </div>
            <InputAdornment>
              <IconButton
                onClick={() => {
                  setOpenActions((prev) => !prev);
                }}
              >
                <LinkSimple style={{ color: !mode ? "black" : "white" }} />
              </IconButton>
            </InputAdornment>
          </div>
        ),
        endAdornment: (
          <InputAdornment>
            <IconButton
              onClick={() => {
                setOpenPicker((prev) => !prev);
              }}
            >
              <Smiley style={{ color: !mode ? "black" : "white" }} />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default function Footer() {
  const theme = useTheme();
  const [openPicker, setOpenPicker] = useState(false);
  const { mode } = useSelector((state) => state.app);
  return (
    <div
      className="w-100 py-3 px-4"
      style={{
        backgroundColor: !mode ? "#fbfaff" : "#161C24",
        boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
      }}
    >
      <div className="d-flex align-items-center gap-3">
        <div className="w-100">
          {/* Chat Input */}
          <div
            className={`position-fixed d-${openPicker ? "inline" : "none"}`}
            style={{ zIndex: "10", bottom: "81px", right: "100px" }}
          >
            <Picker data={data} onEmojiSelect={console.log} />
          </div>
          <ChatInput setOpenPicker={setOpenPicker} />
        </div>
        <div
          className="rounded-3"
          style={{
            width: "48px",
            height: "48px",
            backgroundColor: "#0162C4",
          }}
        >
          <div className="h-100 w-100 d-flex align-items-center justify-content-center">
            <IconButton>
              <PaperPlaneTilt color="#fff" />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
}
