import React from "react";
import Chats from "./Chats";
import Conversation from "../../components/conversation";
import Contact from "../../components/Contact";
import { useSelector } from "react-redux";
import SharedMessages from "../../components/SharedMessages";
import StarredMessages from "../../components/StarredMessages";

import NoChatSVG from "../../assets/Illustration/NoChat";

const GeneralApp = () => {
  const { sidebar, room_id, chat_type } = useSelector((store) => store.app);
  const { mode } = useSelector((state) => state.app);

  return (
    <div className="d-flex w-100">
      {/* chats */}
      <Chats />

      <div
        className="h-100"
        style={{
          width: sidebar.open ? "calc(100vw - 730px)" : "calc(100vw - 410px)",
          backgroundColor: !mode ? "#f0f4fa" : "#212B36",
        }}
      >
        {/* conversation */}
        {room_id !== null && chat_type === "individual" ? (
          <Conversation />
        ) : (
          <div className="d-flex flex-column h-100 w-100 align-items-center justify-content-center gap-2">
            <NoChatSVG />
            <p className="m-0">Select a conversation or start new one</p>
          </div>
        )}
      </div>
      {/* Contact */}
      {sidebar.open &&
        (() => {
          switch (sidebar.type) {
            case "CONTACT":
              return <Contact />;
            case "STARRED":
              return <StarredMessages />;
            case "SHARED":
              return <SharedMessages />;
            default:
              break;
          }
        })()}
    </div>
  );
};

export default GeneralApp;
