export interface Chat {
    chatId: string;
    chatName: string;
    chatImage: string;
    chatLastMessage: string;
    chatLastMessageTime: string;
}

export type Chats = Chat[];
