import { getSystemConfig } from '@/service';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

const initSystem: Store.System = {
  loading: false,
  logo: '',
  name: '',
  version: '',
  description: '',
};

// 异步 thunk，用于从 API 获取配置数据
export const fetchSystemConfig = createAsyncThunk(
  'system/fetchSystemConfig',
  getSystemConfig,
);

export const systemStore = createSlice({
  name: 'system',
  initialState: initSystem,
  reducers: {
    setSystem: (state, action: PayloadAction<Store.System>) => {
      return { ...state, ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSystemConfig.pending, (state) => {
        // 可以在这里设置加载状态
        state.loading = true;
      })
      .addCase(
        fetchSystemConfig.fulfilled,
        (state, action: PayloadAction<Store.System>) => {
          return { ...state, ...action.payload, loading: false };
        },
      )
      .addCase(fetchSystemConfig.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { setSystem } = systemStore.actions;

export default systemStore.reducer;
