import {MainHeader} from './general/MainHeader';
import {Home} from './pages/Home';
import {CarouselComponent} from './general/Carousel';
import {Footer} from './pages/Footer';
import {LetsTalk} from './pages/LetsTalk';
import {Services} from './pages/Services';
import {useEffect} from 'react';
import {Routes as RoutesGroup, Route} from "react-router-dom";
import {Policy} from "./pages/Policy";
import {About} from "./pages/About";

function App() {


    useEffect(() => {
        document.title = 'Innovia';
    }, []);
    return (
        <>
            <MainHeader/>
            <main>
                <RoutesGroup>
                    <Route path={"/privacypolicy"} element={<Policy/>}/>
                    <Route path='/' element={
                        <>

                            <Home/>
                            <About/>
                            <LetsTalk/>
                            <CarouselComponent/>
                            <Services/>
                            <Footer/>
                        </>}
                    />

                </RoutesGroup>
            </main>
        </>
    );
}

export default App;
