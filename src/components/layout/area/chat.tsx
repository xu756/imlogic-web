interface Prop {
    chatId: string;
    chatName: string;
}

const chat = (prop: Prop) => {
    return <div>{JSON.stringify(prop)}</div>;
};
export default chat;
