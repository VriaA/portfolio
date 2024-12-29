import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AppLayout />}>
                    <Route
                        path="/"
                        element={<Home />}
                    />
                    <Route
                        path="/projects"
                        element={<Projects />}
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
