import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  numbers_arr : []
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
        let initialValue = 0;
        state.value = state.numbers_arr.reduce(
          (accumulator, currentValue) => accumulator + currentValue,
          initialValue
        );
    },
 
    addData:(state,action) => {
        state.numbers_arr.push(action.payload);
        console.log(state.numbers_arr)
    }
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount,addData } = counterSlice.actions

export default counterSlice.reducer;