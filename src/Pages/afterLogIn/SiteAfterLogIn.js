
import PacientHome from "./pacientHome/PacientHome";
import MedicHome from "./medicHome/MedicHome";
function SiteAfterLogIn(){
    return(
        <div>
            <MedicHome/>
            <PacientHome/>
        </div>

    )
}

export default SiteAfterLogIn;
