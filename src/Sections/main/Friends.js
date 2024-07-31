import { Dialog, DialogContent, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import {
  FriendComponent,
  FriendRequestComponent,
  UserComponent,
} from "../../components/Friends";
import { Members_List } from "../../data";
import { useSelector } from "react-redux";

const UsersList = () => {
  return (
    <>
      {Members_List.map((el, idx) => {
        return <UserComponent key={el._id} {...el} />;
      })}
    </>
  );
};

const FriendsList = () => {
  return (
    <>
      {Members_List.map((el, idx) => {
        return <FriendComponent key={el._id} {...el} />;
      })}
    </>
  );
};

const FriendsRequestsList = () => {
  return (
    <>
      {Members_List.map((el, idx) => {
        return <FriendRequestComponent key={el.id} {...el} id={el.id} />;
      })}
    </>
  );
};

export default function Friends({ open, handleClose }) {
  const [value, setValue] = useState(0);
  const { mode } = useSelector((state) => state.app);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Dialog
      fullWidth
      maxWidth="xs"
      keepMounted
      open={open}
      onClose={handleClose}
      sx={{ p: 4 }}
    >
      <div
        className="d-flex justify-content-center w-100 p-2"
        style={{
          backgroundColor: !mode ? "#fbfaff" : "#161C24",
          color: !mode ? "black" : "white",
        }}
      >
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="Explore" sx={{ color: !mode ? "black" : "white" }} />
          <Tab label="Friends" sx={{ color: !mode ? "black" : "white" }} />
          <Tab label="Requests" sx={{ color: !mode ? "black" : "white" }} />
        </Tabs>
      </div>
      <DialogContent
        sx={{
          backgroundColor: !mode ? "#fbfaff" : "#161C24",
          color: !mode ? "black" : "white",
        }}
      >
        <div className="d-flex flex-column h-100">
          <div className="d-flex flex-column gap-2">
            {(() => {
              switch (value) {
                case 0: // display all users
                  return <UsersList />;
                case 1: // display all friends
                  return <FriendsList />;
                case 2: // display all friends requests
                  return <FriendsRequestsList />;
                default:
                  break;
              }
            })()}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
