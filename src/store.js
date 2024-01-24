import GeneralSlice from "./features/genereal/slice/generealSlice"
import BooleanSLice from "./features/boolean/slice/BooleanSlice"
import TypingTextSlice from "./features/typingtext/Slice/TypingTextSlice"
import { configureStore } from "@reduxjs/toolkit"

const store = configureStore({
    reducer: {
        general: GeneralSlice,
        boolean: BooleanSLice,
        typingText: TypingTextSlice
    }
})

export default store

