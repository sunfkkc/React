import { configureStore } from "@reduxjs/toolkit";
/*import countReducer from '../features/counter/counterSlice'
import mysliceReducer from '../features/my/mySlice'
import userReducer from '../features/user/userSlice'
import loginReducer from '../features/login/loginSlice'*/
export const store = configureStore({
  reducer: {
    //counter: countReducer,
    //myslicel: mysliceReducer,
    //user: userReducer,
    //login: loginReducer,
  }
})