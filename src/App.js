import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import AboutMe from "./Components/AboutMe";
import School from "./Components/School";
import Page404 from "./Components/Page404";

const App = () => {
    return (
        <div className="App">

            <NavBar />
            <Routes>
                <Route path="/" exact element={<AboutMe />} />
                <Route path="/School" element={<School />}/>
                <Route path="*" element={<Page404 />} />
            </Routes>

        </div>
    );
}

export default App;
