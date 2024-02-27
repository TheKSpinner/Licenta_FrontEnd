import SiteBeforeLogIn from "./Pages/beforeLogIn/SiteBeforeLogIn";
import SiteDuringLogIn from "./Pages/duringLogIn/SiteDuringLogIn";
import SiteAfterLogIn from "./Pages/afterLogIn/SiteAfterLogIn";

function App() {
    return (
        <div>
            <SiteBeforeLogIn/>
            <SiteDuringLogIn/>
            <SiteAfterLogIn/>
        </div>
    );
}

export default App;
