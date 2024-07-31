import { useTheme } from "@emotion/react";
import { Divider, IconButton, Menu, MenuItem } from "@mui/material";
import { DotsThreeVertical, DownloadSimple, Image } from "phosphor-react";
import { Message_options } from "../../data";
import { useState } from "react";
import { useSelector } from "react-redux";

const DocMsg = ({ el, menu }) => {
  const { mode } = useSelector((state) => state.app);
  return (
    <div className={`d-flex justify-content-${el.incoming ? "start" : "end"}`}>
      <div
        className="p-2 rounded-3 "
        style={{
          backgroundColor: el.incoming
            ? !mode ? "#fff" : "#161C24"
            : "#0162C4",
          width: "max-content",
        }}
      >
        <div className="d-flex flex-column gap-2">
          <div
            className="p-2 d-flex gap-3 align-items-center rounded-3"
            style={{ backgroundColor: !mode ? "#fff" : "#212B36", color: !mode ? "black" : "white" }}
          >
            <Image size={48} />
            <p className="mx-2 my-0">test.png</p>
            <IconButton>
              <DownloadSimple style={{color: !mode ? "black" : "white"}}/>
            </IconButton>
          </div>
          <p
            className="m-0"
            style={{ color: !mode ? "black" : "white" }}
          >
            {el.message}
          </p>
        </div>
      </div>
      {menu && <MessageOptions />}
    </div>
  );
};

const LinkMsg = ({ el, menu }) => {
  const theme = useTheme();
    const { mode } = useSelector((state) => state.app);
  return (
    <div className={`d-flex justify-content-${el.incoming ? "start" : "end"}`}>
      <div
        className="p-2 rounded-3 "
        style={{
          backgroundColor: el.incoming
            ? !mode ? "#fff" : "#161C24"
            : "#0162C4",
          width: "max-content",
        }}
      >
        <div className="d-flex flex-column gap-2">
          <div
            className="p-2 d-flex flex-column gap-3 align-items rounded-3"
            style={{ backgroundColor: !mode ? "#fff" : "#212B36" }}
          >
            <img
              src={el.preview}
              alt={el.message}
              style={{ maxHeight: "210px", borderRadius: "10px", maxWidth: "100%" }}
            />
            <div className="d-flex flex-column gap-2">
              <h6 className="m-0"style={{ color: !mode ? "black" : "white" }}>Creating Chat App</h6>
              <a
                style={{ color: "#0162C4" }}
                href="https://www.google.com"
              >
                www.google.com
              </a>
            </div>
            <p
              className="m-0"
              style={{ color: !mode ? "black" : "white" }}
            >
              {el.message}
            </p>
          </div>
        </div>
      </div>
      {menu && <MessageOptions />}
    </div>
  );
};

const ReplyMsg = ({ el, menu }) => {
  const theme = useTheme();
  const { mode } = useSelector((state) => state.app);
  return (
    <div className={`d-flex justify-content-${el.incoming ? "start" : "end"}`}>
      <div
        className="p-2 rounded-3 "
        style={{
          backgroundColor: el.incoming
            ? !mode ? "#fff" : "#161C24"
            : "#0162C4",
          width: "max-content",
        }}
      >
        <div className="d-flex flex-column gap-2">
          <div
            className="p-2 d-flex flex-column gap-3 align-items-center rounded-2"
            style={{ backgroundColor: !mode ? "#fff" : "#212B36" }}
          >
            <p className="m-0" style={{ color: !mode ? "black" : "white" }}>
              {el.message}
            </p>
          </div>
          <p
            className="m-0"
            style={{ color: "#fff" }}
          >
            {el.reply}
          </p>
        </div>
      </div>
      {menu && <MessageOptions />}
    </div>
  );
};

const MediaMsg = ({ el, menu }) => {
  const theme = useTheme();
  const { mode } = useSelector((state) => state.app);
  return (
    <div className={`d-flex justify-content-${el.incoming ? "start" : "end"}`}>
      <div
        className="p-2 rounded-3 "
        style={{
          backgroundColor: el.incoming
            ? !mode ? "#fff" : "#161C24"
            : "#0162C4",
          width: "max-content",
        }}
      >
        <div className="d-flex flex-column gap-1">
          <img
            src={el.img}
            alt={el.message}
            style={{ maxHeight: "210px", borderRadius: "10px" , maxWidth: "100%"}}
          />
          <p
            className="m-0"
            style={{ color: !mode ? "black" : "white" }}
          >
            {el.message}
          </p>
        </div>
      </div>
      {menu && <MessageOptions />}
    </div>
  );
};

const TextMsg = ({ el, menu }) => {
  const theme = useTheme();
  const { mode } = useSelector((state) => state.app);
  return (
    <div className={`d-flex justify-content-${el.incoming ? "start" : "end"}`}>
      <div
        className="p-2 rounded-3 "
        style={{
          backgroundColor: el.incoming
            ? !mode ? "#fff" : "#161C24"
            : "#0162C4",
          width: "max-content",
        }}
      >
        <p
          className="m-0"
          style={{ color: el.incoming ? !mode ? "black" : "#fff" : "#fff"  }}
        >
          {el.message}
        </p>
      </div>
      {menu && <MessageOptions />}
    </div>
  );
};

const Timeline = ({ el }) => {
  const theme = useTheme();
  const { mode } = useSelector((state) => state.app);
  return (
    <div className="d-flex align-items-center justify-content-between">
      <Divider width="46%" />
      <p className="m-0" style={{ color: !mode ? "black" : "white" }}>
        {el.text}
      </p>
      <Divider width="46%" />
    </div>
  );
};

const MessageOptions = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <DotsThreeVertical
        style={{cursor: "pointer"}}
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        size={20}
      />
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <div className="d-flex flex-column gap-3 px-1">
          {Message_options.map((el) => {
            return (
              <>
                <MenuItem onClick={handleClick}>{el.title}</MenuItem>
              </>
            );
          })}
        </div>
      </Menu>
    </>
  );
};

export { Timeline, TextMsg, MediaMsg, ReplyMsg, LinkMsg, DocMsg };
