import { useTheme } from "@emotion/react";
import { faker } from "@faker-js/faker";
import { Avatar, IconButton } from "@mui/material";
import {
  Bell,
  CaretLeft,
  Image,
  Info,
  Key,
  Keyboard,
  Lock,
  Note,
  PencilCircle,
} from "phosphor-react";
import { useState } from "react";
import Shortcuts from "../../Sections/Settings/Shortcuts";
import { useSelector } from "react-redux";

export default function Settings() {
  const theme = useTheme();

  const [openShortcuts, setOpenShortcuts] = useState(false);

  const { mode } = useSelector((state) => state.app);

  const handleOpenShortcuts = () => {
    setOpenShortcuts(true);
  };

  const handleCloseShortcuts = () => {
    setOpenShortcuts(false);
  };

  const list = [
    {
      key: 0,
      icon: <Bell size={20} />,
      title: "Notifications",
      onclick: () => {},
    },
    {
      key: 1,
      icon: <Lock size={20} />,
      title: "Privacy",
      onclick: () => {},
    },
    {
      key: 2,
      icon: <Key size={20} />,
      title: "Security",
      onclick: () => {},
    },
    {
      key: 3,
      icon: <PencilCircle size={20} />,
      title: "Theme",
      //   onclick: handleOpenTheme,
      onclick: () => {},
    },
    {
      key: 4,
      icon: <Image size={20} />,
      title: "Chat Wallpaper",
      onclick: () => {},
    },
    {
      key: 5,
      icon: <Note size={20} />,
      title: "Request Account Info",
      onclick: () => {},
    },
    {
      key: 6,
      icon: <Keyboard size={20} />,
      title: "Keyboard Shortcuts",
      onclick: handleOpenShortcuts,
    },
    {
      key: 7,
      icon: <Info size={20} />,
      title: "Help",
      onclick: () => {},
    },
  ];

  return (
    <>
      <div className="d-flex w-100">
        {/* LeftPanel */}
        <div
          className="d-flex flex-column vh-100 overflow-y-scroll"
          style={{
            width: "320px",
            backgroundColor:
              !mode
                ? "#fbfaff"
                : "#161C24",
            boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
            color: !mode ? "black" : "white",
          }}
        >
          <div className="d-flex flex-column gap-4 p-4">
            {/* Header */}
            <div className="d-flex align-items-center gap-3">
              <IconButton>
                <CaretLeft size={24} color="#4b4b4b" />
              </IconButton>
              <h5 className="m-0">Settings</h5>
            </div>
            {/* Profile */}
            <div className="d-flex align-items-center gap-3">
              <Avatar
                style={{ width: "56px", height: "56px" }}
                src={faker.image.avatar()}
                alt={faker.name.fullName()}
              />
              <div className="d-flex flex-column">
                <h6 className="m-0">{faker.name.fullName()}</h6>
                <p className="m-0" style={{ fontWeight: "300" }}>
                  {faker.random.words()}
                </p>
              </div>
            </div>
            {/* List of Options */}
            <div className="d-flex flex-column gap-4">
              {list.map(
                ({ key, icon, title, onclick}) => {
                  return (
                    <div
                      className="d-flex flex-column gap-2"
                      style={{ cursor: "pointer" }}
                      onClick={onclick}
                    >
                      <div className="d-flex  gap-2 align-items-center ">
                        {icon}
                        <p className="m-0">{title}</p>
                      </div>
                      {key !== 7 && <hr className="m-0" />}
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </div>
        {/* RightPanel */}
      </div>
      {openShortcuts && <Shortcuts open={openShortcuts} handleClose={handleCloseShortcuts} />}
    </>
  );
}
