import { configureStore, createSlice } from '@reduxjs/toolkit'
import { useSelector, useDispatch } from 'react-redux'
// 定义初始状态为包含多个属性的对象

const initialState = {
  value: 0,
  step: 1,
}

// 创建切片
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += state.step
    },
    decrement: (state) => {
      state.value -= state.step
    },
    setStep: (state, action) => {
      state.step = action.payload
    },
  },
})

// 导出切片的 actions
export const { increment, decrement, setStep } = counterSlice.actions

// 配置 Redux store
export const store = configureStore({
  reducer: {
    data: counterSlice.reducer,
  },
})

export { useSelector, useDispatch }
