import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    typingText: '',
}

const TypingTextSlice = createSlice({
    name: 'typingText',
    initialState,
    reducers: {
        setTypingText: (state, action) => {
            state.typingText = action.payload
        }
    }
})

export default TypingTextSlice.reducer
export const { setTypingText } = TypingTextSlice.actions
