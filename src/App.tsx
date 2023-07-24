import {MainHeader} from "./general/MainHeader";
import {Main} from "./common/styles/forms.styles";
import {About} from "./pages/About";
import {Routes as RoutesGroup, Route} from "react-router-dom";
import {Contact} from "./pages/Contact";
import {Whyus} from "./pages/Company";
import {Routes} from "./common/RoutesEnum";

function App() {

    return (
        <div >
            <MainHeader/>
            <Main >
                <RoutesGroup>
                    <Route path='/' element={<About/>}/>
                    <Route path={`/${Routes.WHYUS}`} element={<Whyus/>}/>
                    <Route path={`/${Routes.CONTACT}`} element={<Contact/>}/>
                </RoutesGroup>
            </Main>
        </div>
    );
}

export default App;
