import {Route, Routes} from "react-router-dom";
import LayoutBeforeLogIn from "./Layout_Before_LogIn/Layout_Before_LogIn";
import Home from "./Home/Home";
import AllMedics from "./Medics/AllMedics";
import AllServices from "./Services/AllServices";
import OpeningHours from "./OpeningHours/OpeningHours";
import Contact from "./Contact/Contact";

function SiteBeforeLogIn(){
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <LayoutBeforeLogIn>
                        <Home />
                    </LayoutBeforeLogIn>
                }
            />
            <Route
                path="medics/*"
                element={
                    <LayoutBeforeLogIn>
                        <AllMedics />
                    </LayoutBeforeLogIn>
                }
            />
            <Route
                path="services/*"
                element={
                    <LayoutBeforeLogIn>
                        <AllServices />
                    </LayoutBeforeLogIn>
                }
            />
            <Route
                path="opening-hours"
                element={
                    <LayoutBeforeLogIn>
                        <OpeningHours />
                    </LayoutBeforeLogIn>
                }
            />
            <Route
                path="Contact"
                element={
                    <LayoutBeforeLogIn>
                        <Contact />
                    </LayoutBeforeLogIn>
                }
            />
    </Routes>
    );
}
export default SiteBeforeLogIn;