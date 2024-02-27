import {Route, Routes} from "react-router-dom";
import LogIn from "./LogIn/LogIn";
import ForgotPassword from "./forgotPass/ForgotPassword";
import SignUp from "./SignUp/SignUp";

function SiteDuringLogIn(){
    return (
        <Routes>
              <Route path="log-in" element={<LogIn />} />
              <Route path="forgot-password" element={<ForgotPassword />} />
              <Route path="signup" element={<SignUp />} />
        </Routes>
    );
}

export default SiteDuringLogIn;