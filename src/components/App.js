import React from 'react';
import '../App.css';
import {BrowserRouter, Route} from "react-router-dom"
import HEADER from "./header/header";
import Login from "./login";
import Intro from "./intro";

import SimpleTable from "./results"
import {faHome} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class App extends React.Component {
    render() {
        return (
            <div>
                <HEADER/>
                <Login/>
                <Intro/>
                <SimpleTable/>
            </div>

        )

    }
}

export default App;
