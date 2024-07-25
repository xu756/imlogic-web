import { createSlice, PayloadAction } from '@reduxjs/toolkit';
const initChatList: Model.Chat[] = [];

export const chatStore = createSlice({
  name: 'chatList',
  initialState: {
    chatList: initChatList,
    activeChat: '',
  },
  reducers: {
    addChat: (state, action: PayloadAction) => {
      state.chatList.push(action.payload);
    },
    setActiveChat: (state, action: PayloadAction) => {
      state.activeChat = action.payload;
    },
  },
});

export const { addChat, setActiveChat } = chatStore.actions;
