import {Button, Typography} from '@mui/material';
import {MainHeader} from "./general/MainHeader";
import {Main} from "./common/styles/forms.styles";
import {About} from "./pages/About";

function App() {
    return (
        <div>
            <MainHeader/>
            <Main>
                <About/>
            </Main>
        </div>
    );
}

export default App;
