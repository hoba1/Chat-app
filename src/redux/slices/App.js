import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sidebar: {
    open: false,
    type: "CONTACT",
  },
  chat_type: null,
  room_id: null,
  mode: false,
};

const slice = createSlice({
  name: "app",
  initialState,
  reducers: {
    // toggle sidebar
    toggleSideBar(state) {
      state.sidebar.open = !state.sidebar.open;
    },
    updateSideBarType(state, action) {
      state.sidebar.type = action.payload.type;
    },
    selectConversation(state, action) {
      state.chat_type = "individual";
      state.room_id = action.payload.room_id;
    },
    Darkorlight: (state, action) => {
      state.mode = action.payload;
    },
  },
});

export default slice.reducer;

export function ToggleSidebar() {
  return async (dispatch, getState) => {
    dispatch(slice.actions.toggleSideBar());
  };
}
export function UpdateSidebarType(type) {
  return async (dispatch, getState) => {
    dispatch(slice.actions.updateSideBarType({ type }));
  };
}

export const SelectConversation = ({ room_id }) => {
  return async (dispatch, getState) => {
    dispatch(slice.actions.selectConversation({ room_id }));
  };
};

export const DarkorLight = (mode) => {
  return async (dispatch, getState) => {
    dispatch(slice.actions.Darkorlight(mode));
  };
};
