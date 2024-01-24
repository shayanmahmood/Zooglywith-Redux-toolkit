import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    showChoose: false,
    show: false
}

const BooleanSLice = createSlice({
    name: 'boolean',
    initialState,
    reducers: {
        ShowChooseFalse: (state) => {
            state.showChoose = false
        },
        ShowChooseTrue: (state) => {
            state.showChoose = true
        },
        ShowFalse: (state) => {
            state.show = false
        },
        ShowTrue: (state) => {
            state.show = true
        }
    }
})

export default BooleanSLice.reducer
export const { ShowChooseFalse, ShowChooseTrue, ShowFalse, ShowTrue } = BooleanSLice.actions