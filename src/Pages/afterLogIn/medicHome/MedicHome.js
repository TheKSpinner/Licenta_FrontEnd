import HomePageMedic from "./HomePageMedic/HomePageMedic";
import {Route, Routes} from "react-router-dom";
import LayoutAfterLogInMedic from './Layout_After_LogIn_Medic/LayoutAfterLogInPacient'
import Patients from "./Pages/Pacienti/Patients";

function MedicHome(){
    return(
        <Routes>
            <Route
                  path="/medic"
                element={
                  <LayoutAfterLogInMedic>
                       <HomePageMedic/>
                  </LayoutAfterLogInMedic>
               }
        />
            <Route
                path="/pacienti"
                element={
                        <Patients/>
                }
            />
        </Routes>
    )
}
export default MedicHome;