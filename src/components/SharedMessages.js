import { useTheme } from "@emotion/react";
import { Grid, IconButton, Tab, Tabs } from "@mui/material";
import { CaretLeft } from "phosphor-react";
import { useDispatch, useSelector } from "react-redux";
import { UpdateSidebarType } from "../redux/slices/App";
import { useState } from "react";
import { faker } from "@faker-js/faker";
import { SHARED_DOCS, SHARED_LINKS } from "../data";
import { DocMsg, LinkMsg } from "./conversation/MsgTypes";

export default function SharedMessages() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { mode } = useSelector((state) => state.app);

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
            <h6 className="m-0">Shared Messages</h6>
          </div>
        </div>
        <Tabs
          className="px-2 pt-2"
          value={value}
          onChange={handleChange}
          centered
        >
          <Tab label="Media" style={{color: !mode ? "black" : "white",}}/>
          <Tab label="Links" style={{color: !mode ? "black" : "white",}}/>
          <Tab label="Docs" style={{color: !mode ? "black" : "white",}}/>
        </Tabs>
        {/* Body */}
        <div
          className={`h-100 position-relative d-flex flex-column flex-grow-1 overflow-y-scroll p-3 gap-${
            value === 1 ? 1 : 3
          }`}
        >
          {(() => {
            switch (value) {
              case 0:
                // imgs
                return (
                  <Grid container spacing={2}>
                    {[0, 1, 2, 3, 4, 5, 6].map((el) => {
                      return (
                        <Grid item xs={4}>
                          <img
                            src={faker.image.avatar()}
                            alt={faker.name.fullName()}
                            width={80}
                            height={80}
                          />
                        </Grid>
                      );
                    })}
                  </Grid>
                );
              case 1:
                // links
                return SHARED_LINKS.map((el) => <LinkMsg el={el} />);
              case 2:
                // docs
                return SHARED_DOCS.map((el) => <DocMsg el={el} />);
              default:
                break;
            }
          })()}
        </div>
      </div>
    </div>
  );
}
