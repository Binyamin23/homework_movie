import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "../components/home";
import Page404 from "../components/page404";
import VodInfo from "../components/vodInfo";
import Layout from '../layout/layout';


function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/year/:yyyy" element={<Home/>}/>
                </Route>
                <Route path="/info/:id" element={<VodInfo />} />
                <Route path="/*" element={<Page404 />} />
            </Routes>
        </Router>

    );
}

export default AppRouter;