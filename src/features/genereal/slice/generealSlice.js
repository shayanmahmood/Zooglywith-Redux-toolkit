import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    step: 1,
    name: '',
    image: '',
    message: ''
}

const GeneralSlice = createSlice({
    name: "general",
    initialState,
    reducers: {
        IncStep: (state) => {
            state.step += 1
        },
        DecStep: (state) => {
            state.step -= 1
        },
        setname: (state, action) => {
            state.name = action.payload
        },
        Image: (state, action) => {
            state.image = action.payload
        },
        setMessage: (state, action) => {
            state.message = action.payload
        }
    }
})

export default GeneralSlice.reducer
export const { IncStep, DecStep, setname, Image, setMessage } = GeneralSlice.actions
