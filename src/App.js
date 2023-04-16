import logo from './logoLiriDark.svg';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {AboutMe} from "./screens/AboutMe";
import {Experience} from "./screens/Experience";
import {Hobbies} from "./screens/Hobbies";
import {Qualifications} from "./screens/Qualifications";


function App() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/AboutMe/:id" element={<AboutMe/>}/>
            <Route path="/Experience" element={<Experience/>}/>
            <Route path="/Hobbies" element={<Hobbies/>}/>
            <Route path="/Qualifications" element={<Qualifications/>}/>
            <Route path="/" element={<></>}/>
            <Route path="*" element={<>Page Not Found</>}/>
        </Routes>
            <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
            </header>
        </div>
        </BrowserRouter>

    );
}

export default App;
