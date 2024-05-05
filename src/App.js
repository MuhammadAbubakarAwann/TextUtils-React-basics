import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/NavBar";
import TextForm from "./components/TextForm";
import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    const [mode, setMode] = useState('light');
    const [alert, setAlert] = useState(null);

    const showAlert = (message, type) => {
        setAlert({
            message: message,
            type: type,
        });

        setTimeout(() => {
            setAlert(null);
        }, 1500);
    };

    const toggleMode = () => {
        if (mode === 'light') {
            setMode('dark');
            document.body.style.backgroundColor = 'black';
            showAlert("Dark Mode Has been enabled.", "success");
        } else {
            setMode('light');
            document.body.style.backgroundColor = 'white';
            showAlert("Light Mode Has been enabled.", "success");
        }
    };

    return (
        <>
            <Router>
                <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
                <Alert alert={alert} />
                <div className="container my-1">
                    <Routes>
                        <Route exact path="/about" element={<About />} />
                        <Route exact path="/" element={<TextForm heading={"Enter the text to analyze: "} mode={mode} showAlert={showAlert} />} />
                    </Routes>
                </div>
            </Router>
        </>
    );
}

export default App;
