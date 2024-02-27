import LayoutAfterLogInPacient from "./Layout_After_LogIn_Pacient/LayoutAfterLogInPacient";
import {Route, Routes} from "react-router-dom";
import HomePagePacient from './HomePagePacient/HomePagePacient'
import Consultatii from "./Pages/Consultatii/Consultatii";
import Programeaza from './Pages/Fa o programare/Programeaza'
import ProgramariActive from './Pages/Programari Active/ProgramariActive'
import Rezultate from './Pages/Rezultate/Rezultate'

function PacientHome(){
    return(
            <Routes>
                <Route
                    path="pacient"
                    element={
                    <LayoutAfterLogInPacient>
                            <HomePagePacient/>
                    </LayoutAfterLogInPacient>
                    }
                />
                <Route
                    path="consultatii"
                    element={

                        <Consultatii/>

                    }
                   />
                <Route
                    path="programari"
                    element={

                            <ProgramariActive/>

                    }
                />
                <Route
                    path="rezultate"
                    element={

                            <Rezultate/>

                    }
                />
                <Route
                    path="programeaza"
                    element={
                            //TODO:
                            <Programeaza/>

                    }
                />
            </Routes>
    );
}

export default PacientHome;
