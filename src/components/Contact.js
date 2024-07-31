import { useTheme } from "@emotion/react";
import { Avatar, Button, IconButton } from "@mui/material";
import {
  Bell,
  CaretRight,
  Phone,
  Prohibit,
  Star,
  Trash,
  VideoCamera,
  X,
} from "phosphor-react";
import { useDispatch, useSelector } from "react-redux";
import { ToggleSidebar, UpdateSidebarType } from "../redux/slices/App";
import { faker } from "@faker-js/faker";
import AntSwitch from "../components/AntSwitch";

const BlockModal = () => {
  const { mode } = useSelector((state) => state.app);
  return (
    <div
      className="modal fade"
      id="BlockModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div
          className="modal-content"
          style={{
            backgroundColor: !mode ? "#fbfaff" : "#161C24",
          }}
        >
          <div className="modal-header border-0 pb-1">
            <h1 className="modal-title fs-5" id="BlockModalLabel">
              Block This Contact
            </h1>
          </div>
          <div className="modal-body">
            Are You Sure You Want To Block The content
          </div>
          <div className="modal-footer border-0">
            <button
              type="button"
              className="btn text-primary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Yes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
const DeleteModal = () => {
  const { mode } = useSelector((state) => state.app);
  return (
    <div
      className="modal fade"
      id="DeleteModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div
          className="modal-content"
          style={{
            backgroundColor: !mode ? "#fbfaff" : "#161C24",
          }}
        >
          <div className="modal-header border-0 pb-1">
            <h1 className="modal-title fs-5" id="DeleteModalLabel">
              Delete This Chat
            </h1>
          </div>
          <div className="modal-body">
            Are You Sure You Want To Delete The Chat
          </div>
          <div className="modal-footer border-0">
            <button
              type="button"
              className="btn text-primary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Yes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Contact() {
  const { mode } = useSelector((state) => state.app);
  const dispatch = useDispatch();
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
            backgroundColor: !mode ? "#fbfaff" : "#161C24",
            color: !mode ? "black" : "white",
          }}
        >
          <div className="h-100 d-flex p-2 align-items-center justify-content-between gap-3">
            <h6 className="m-0">Contact info</h6>
            <IconButton
              onClick={() => {
                dispatch(ToggleSidebar());
              }}
            >
              <X style={{ color: !mode ? "black" : "white" }} />
            </IconButton>
          </div>
        </div>
        {/* Body */}
        <div className="h-100 position-relative d-flex flex-column flex-grow-1 overflow-y-scroll p-3 gap-3">
          <div className="d-flex align-items-center gap-5">
            <Avatar
              src={faker.image.avatar()}
              alt={faker.name.firstName()}
              style={{ height: "64px", width: "64px" }}
            />
            <div className="d-flex flex-column gap-1">
              <p className="m-0" style={{ fontWeight: "700" }}>
                {faker.name.fullName()}
              </p>
              <p className="m-0" style={{ fontWeight: "400" }}>
                01271994320
              </p>
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-evenly">
            <div className="d-flex flex-column align-items-center gap-1">
              <IconButton>
                <Phone style={{ color: !mode ? "black" : "white" }} />
              </IconButton>
              <p className="m-0">Voice</p>
            </div>
            <div className="d-flex flex-column align-items-center gap-1">
              <IconButton>
                <VideoCamera style={{ color: !mode ? "black" : "white" }} />
              </IconButton>
              <p className="m-0">Video</p>
            </div>
          </div>
          <hr className="m-0" />
          <div className="d-flex flex-column gap-1">
            <h6 className="m-0" style={{ fontWeight: "700" }}>
              About
            </h6>
            <p className="m-0" style={{ fontWeight: "400" }}>
              bla bla bla bla bla bla bla
            </p>
          </div>
          <hr className="m-0" />
          <div className="d-flex align-items-center justify-content-between">
            <p className="m-0">Media, Links & Docs</p>
            <Button
              onClick={() => {
                dispatch(UpdateSidebarType("SHARED"));
              }}
              endIcon={<CaretRight />}
            >
              401
            </Button>
          </div>
          <div className="d-flex gap-3 align-items-center">
            {[1, 2, 3].map((el) => {
              return (
                <div>
                  <img
                    src={faker.image.food()}
                    alt={faker.name.fullName()}
                    width={80}
                    height={80}
                  />
                </div>
              );
            })}
          </div>
          <hr className="m-0" />
          <div className="d-flex align-items-center  justify-content-between">
            <div className="d-flex align-items-center gap-2">
              <Star size={21} />
              <p className="m-0">Starred Messages</p>
            </div>
            <IconButton
              onClick={() => {
                dispatch(UpdateSidebarType("STARRED"));
              }}
            >
              <CaretRight  style={{ color: !mode ? "black" : "white" }} />
            </IconButton>
          </div>
          <hr className="m-0" />
          <div className="d-flex align-items-center  justify-content-between">
            <div className="d-flex align-items-center gap-2">
              <Bell size={21} />
              <p className="m-0">Mute Notifications</p>
            </div>
            <AntSwitch />
          </div>
          <hr className="m-0" />
          <p className="m-0">1 group in common</p>
          <div className="d-flex gap-3 align-items-center">
            <Avatar src={faker.image.avatar()} alt={faker.name.fullName} />
            <div className="d-flex flex-column gap-1">
              <p className="m-0" style={{ fontWeight: "600" }}>
                Coding Monk
              </p>
              <p className="m-0" style={{ fontWeight: "400" }}>
                Owl, Parrot, Rabbit, You
              </p>
            </div>
          </div>
          <div className="d-flex align-items-center gap-3">
            <Button
              data-bs-toggle="modal"
              data-bs-target="#BlockModal"
              startIcon={<Prohibit />}
              fullWidth
              variant="outlined"
            >
              Block
            </Button>
            <Button
              data-bs-toggle="modal"
              data-bs-target="#DeleteModal"
              startIcon={<Trash />}
              fullWidth
              variant="outlined"
            >
              Delete
            </Button>
          </div>
        </div>
        {<BlockModal />}
        {<DeleteModal />}
      </div>
    </div>
  );
}
