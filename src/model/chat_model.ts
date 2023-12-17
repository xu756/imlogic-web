export interface ChatModel {
    chatId?: string;
    chatName?: string;
    chatImage?: string;
    chatLastMessage?: string;
    chatLastMessageTime?: string;
}

export type ChatsModel = ChatModel[];
