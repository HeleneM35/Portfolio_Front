import React from "react";
import { Switch, Route } from "react-router-dom";
import Accueil from './components/Accueil'
import CV from './components/Curriculum'
// import Projets from './components/Projets'
// import Interets from './components/Interets'
import Navb from './components/Navbar'


const Router = () => {

    return (
        <>
            <Navb />
            <Switch>
                <Route exact path="/" component={Accueil} />
                <Route path="/cv" component={CV} />
                {/* <Route path="/projets" component={Projets} />
                <Route path="/interets" component={Interets} /> */}
            </Switch>
        </>
    )
}

export default Router;
