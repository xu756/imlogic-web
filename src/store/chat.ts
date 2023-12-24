import { createSlice } from '@reduxjs/toolkit';
import { ChatModel } from '@/model/chat_model';

const initialState: ChatModel[] = [
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

export const chatList = createSlice({
    name: 'chatList',
    initialState: initialState,
    reducers: {
        addChat: (state, action) => {
            console.log('addChat', action.payload);
            state.push(action.payload);
        },
    },
});

export const { addChat } = chatList.actions;
