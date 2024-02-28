import { ChatModel } from '@/model';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
const initChatList: ChatModel[] = [
  {
    chatId: '11pk',
    chatName: '张三',
    chatImage: 'https://img.yzcdn.cn/vant/cat.jpeg',
    chatLastMessage: '你好',
    chatLastMessageTime: '2021-05-01 12:00:00',
  },
  {
    chatId: '22pk',
    chatName: '李四',
    chatImage: 'https://img.yzcdn.cn/vant/cat.jpeg',
    chatLastMessage: '你好',
    chatLastMessageTime: '2021-05-01 12:00:00',
  },
  {
    chatId: '33pk',
    chatName: '王五',
    chatImage: 'https://img.yzcdn.cn/vant/cat.jpeg',
    chatLastMessage: '你好',
    chatLastMessageTime: '2021-05-01 12:00:00',
  },
  {
    chatId: '44pk',
    chatName: '赵六',
    chatImage: 'https://img.yzcdn.cn/vant/cat.jpeg',
    chatLastMessage: '你好',
    chatLastMessageTime: '2021-05-01 12:00:00',
  },
  {
    chatId: '55pk',
    chatName: '田七',
    chatImage: 'https://img.yzcdn.cn/vant/cat.jpeg',
    chatLastMessage: '你好',
    chatLastMessageTime: '2021-05-01 12:00:00',
  },
];

export const chatStore = createSlice({
  name: 'chatList',
  initialState: {
    chatList: initChatList,
    activeChat: initChatList[0].chatId,
  },
  reducers: {
    addChat: (state, action: PayloadAction<ChatModel>) => {
      state.chatList.push(action.payload);
    },
    setActiveChat: (state, action: PayloadAction<string>) => {
      state.activeChat = action.payload;
      // // 当前聊天置顶
      // const activeChat = state.chatList.find(
      //     item => item.chatId === action.payload
      // );
      // const index = state.chatList.indexOf(activeChat as ChatModel);
      // state.chatList.splice(index, 1);
      // state.chatList.unshift(activeChat as ChatModel);
    },
  },
});

export const { addChat, setActiveChat } = chatStore.actions;
