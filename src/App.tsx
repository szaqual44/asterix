import {MainHeader} from "./general/MainHeader";
import {Main} from "./common/styles/forms.styles";
import {About} from "./pages/About";
import {Routes as RoutesGroup, Route} from "react-router-dom";
import {Home} from "./pages/Home";
import {Contact} from "./pages/Contact";
import {Company} from "./pages/Company";
import {Routes} from "./common/RoutesEnum";

function App() {

    return (
        <div >
            <MainHeader/>
            <Main >
                <RoutesGroup>
                    <Route path='/' element={<Home/>}/>
                    <Route path={`/${Routes.COMPANY}`} element={<Company/>}/>
                    <Route path={`/${Routes.ABOUT}`} element={<About/>}/>
                    <Route path={`/${Routes.CONTACT}`} element={<Contact/>}/>
                </RoutesGroup>
            </Main>
        </div>
    );
}

export default App;
