import logo from "../../assets/Images/logo.ico";
import { Gear } from "phosphor-react";
import { Nav_Buttons, Profile_Menu } from "../../data";
import { faker } from "@faker-js/faker";
import { useState } from "react";
import { Avatar, Menu, MenuItem } from "@mui/material";
import AntSwitch from "../../components/AntSwitch";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DarkorLight } from "../../redux/slices/App";

export default function SideBar() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(0);
  const { mode } = useSelector((state) => state.app);
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div
      className="p-2 vh-100"
      style={{
        boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
        width: "100px",
        backgroundColor: mode ? "#212B36" : "#fff",
      }}
    >
      <div className="d-flex flex-column align-items-center justify-content-between h-100 gap-3">
        <div className="d-flex flex-column align-items-center gap-4">
          <div
            className="rounded"
            style={{
              width: "64px",
              height: "64px",
              backgroundColor: "#0162C4",
            }}
          >
            <img
              src={logo}
              alt="chat app logo"
              style={{
                width: "64px",
                height: "64px",
              }}
            />
          </div>
          <div
            style={{ width: "max-content" }}
            className="d-flex flex-column align-items-center gap-3"
          >
            {Nav_Buttons.map((el) =>
              el.index === selected ? (
                <div
                  style={{
                    backgroundColor: "#0162C4",
                  }}
                  className="rounded"
                >
                  <button
                    style={{ color: "#fff", width: "max-content" }}
                    key={el.index}
                    className="btn fs-5"
                    onClick={() => {
                      navigate(el.path);
                    }}
                  >
                    {el.icon}
                  </button>
                </div>
              ) : (
                <button
                  style={{
                    color: !mode ? "#000" : "#fff",
                    width: "max-content",
                  }}
                  onClick={() => {
                    setSelected(el.index);
                    navigate(el.path);
                  }}
                  key={el.index}
                  className="btn fs-5"
                >
                  {el.icon}
                </button>
              )
            )}
            <hr style={{ width: "48px", color: !mode ? "#000" : "#fff" }} />
            {selected === 3 ? (
              <div
                style={{
                  backgroundColor: "#0162C4",
                }}
                className="rounded"
                onClick={() => {
                  navigate("/settings");
                }}
              >
                <button
                  className="btn fs-5"
                  style={{ color: "#fff", width: "max-content" }}
                >
                  <Gear />
                </button>
              </div>
            ) : (
              <button
                style={{
                  color: !mode ? "#000" : "#fff",
                  width: "max-content",
                }}
                onClick={() => {
                  setSelected(3);
                  navigate("/settings");
                }}
                className="btn fs-5"
              >
                <Gear />
              </button>
            )}
          </div>
        </div>
        <div className="d-flex flex-column gap-3">
          <AntSwitch
            onChange={() => {
              dispatch(DarkorLight(!mode));
              localStorage.setItem("mode", !mode);
            }}
            defaultChecked
          />
          <Avatar
            style={{ cursor: "pointer" }}
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            src={faker.image.avatar()}
          />
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            PaperProps={{
              sx: {
                backgroundColor: !mode ? "#fbfaff" : "#161C24",
              }
            }}
          >
            <div
              className="d-flex flex-column gap-3 px-1"
              style={{
                backgroundColor: !mode ? "#fbfaff" : "#161C24",
                color: !mode ? "black" : "white",
              }}
            >
              {Profile_Menu.map((el, idx) => {
                return (
                  <>
                    <MenuItem>
                      <div
                        className="d-flex align-items-center justify-content-between"
                        style={{ width: "100px" }}
                      >
                        <span>{el.title}</span>
                        {el.icon}
                      </div>
                    </MenuItem>
                  </>
                );
              })}
            </div>
          </Menu>
        </div>
      </div>
    </div>
  );
}
