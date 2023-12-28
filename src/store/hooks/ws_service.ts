import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface WsState {
    ws: WebSocket | null;
}

const initialState: WsState = {
    ws: null,
};

export const wsStore = createSlice({
    name: 'ws',
    initialState,
    reducers: {
        connect: (state, action: PayloadAction<string>) => {
            state.ws = new WebSocket(action.payload);
            state.ws.onopen = () => {
                console.log('WebSocket connected');
            };
        },
        disconnect: state => {
            if (state.ws) {
                state.ws.close();
                state.ws = null;
            }
        },
        send: (state, action: PayloadAction<Blob>) => {
            if (state.ws && state.ws.readyState === WebSocket.OPEN) {
                state.ws.send(action.payload);
            } else {
                console.error('WebSocket not open or not available');
            }
        },
    },
});

export const { connect, disconnect, send } = wsStore.actions;
export default wsStore.reducer;
