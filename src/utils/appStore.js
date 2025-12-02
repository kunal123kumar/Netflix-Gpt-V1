import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./moveSlice";
import gptReducer from "./gptSlice";
import configReducer from "./configSlice";

const appStore = configureStore({
    reducer: {
        user : userReducer,
        movie : movieReducer,
        gpt: gptReducer,
        config: configReducer
    }
})
export default appStore