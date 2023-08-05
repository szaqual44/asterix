import {MainHeader} from './general/MainHeader';
import {Home} from './pages/Home';
import {CarouselComponent} from './general/Carousel';
import {Footer} from './pages/Footer';
import {LetsTalk} from './pages/LetsTalk';
import {Services} from './pages/Services';
import {useEffect} from 'react';
import {Routes as RoutesGroup, Route} from "react-router-dom";
import {Policy} from "./pages/Policy";

function App() {



    useEffect(() => {
        document.title = 'Innovia';
    }, []);
    return (
        <>
            <MainHeader/>
            <main>
                <RoutesGroup>
                    <Route path='/' element={
                        <>
                        <Home/>
                        <LetsTalk/>
                        <CarouselComponent/>
                        <Services/>
                        <Footer/>
                        </>}
                    />
                    <Route path={"/privacypolicy"} element={<Policy/>} />
                </RoutesGroup>
            </main>
        </>
    );
}

export default App;
