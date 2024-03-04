import HomePageMedic from "./HomePageMedic/HomePageMedic";
import {Route, Routes} from "react-router-dom";
import LayoutAfterLogInMedic from './Layout_After_LogIn_Medic/LayoutAfterLogInPacient'
import Patients from "./Pages/Pacienti/Patients";
import ProgramariMedic from "./Pages/ProgramariMedic/ProgramariMedic";
import Profil from "./Pages/Profil/Profil";

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

            <Route
                path="/programari-medic"
                element={
                    <ProgramariMedic/>
                }
            />

            <Route
                path="/profil"
                element={

                        <Profil/>

                }
            />
        </Routes>


    )
}
export default MedicHome;