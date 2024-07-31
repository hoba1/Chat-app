import { Avatar, IconButton, useTheme } from "@mui/material";
import StyledBadge from "./StyleBadge";
import { faker } from "@faker-js/faker";
import {
  ArrowDownLeft,
  ArrowUpRight,
  Phone,
  VideoCamera,
} from "phosphor-react";
import { useSelector } from "react-redux";

const CallLogElement = ({ online, incoming, missed }) => {
  const theme = useTheme();
  const { mode } = useSelector((state) => state.app);

  return (
    <>
      <div
        className="w-100 rounded-4 p-2"
        style={{
          backgroundColor: !mode ? "#fff" : "#212B36",
          color: !mode ? "black" : "white",
        }}
      >
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center gap-3">
            {online ? (
              <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                variant="dot"
              >
                <Avatar
                  src={faker.image.avatar()}
                  alt={faker.name.fullName()}
                />
              </StyledBadge>
            ) : (
              <Avatar src={faker.image.avatar()} alt={faker.name.fullName()} />
            )}
            <div>
              <h6 className="mb-1 fw-bold">{faker.name.fullName()}</h6>
              {/* <p className="m-0" style={{ fontSize: "13px" }}>
                {msg}
              </p> */}
              <div className="d-flex align-items-center gap-2">
                {incoming ? (
                  <ArrowDownLeft color={missed ? "red" : "green"} />
                ) : (
                  <ArrowUpRight color={missed ? "red" : "green"} />
                )}
                <p className="m-0" style={{ fontSize: "13px" }}>
                  yesterday 21:22
                </p>
              </div>
            </div>
          </div>
          <IconButton>
            <Phone color="green" />
          </IconButton>
        </div>
      </div>
    </>
  );
};

const CallElement = ({ online }) => {
  const theme = useTheme();
  const { mode } = useSelector((state) => state.app);
  return (
    <div
      className="w-100 rounded-4 p-2"
      style={{
        backgroundColor: !mode ? "#fbfaff" : "#161C24",
        color: !mode ? "black" : "white",
      }}
    >
      <div className="d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center gap-3">
          {online ? (
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
            >
              <Avatar src={faker.image.avatar()} alt={faker.name.fullName()} />
            </StyledBadge>
          ) : (
            <Avatar src={faker.image.avatar()} alt={faker.name.fullName()} />
          )}
          <div>
            <h6 className="mb-1 fw-bold">{faker.name.fullName()}</h6>
          </div>
        </div>
        <div className="d-flex align-items-center">
          <IconButton>
            <Phone color="green" />
          </IconButton>
          <IconButton>
            <VideoCamera color="green" />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export { CallLogElement, CallElement };
