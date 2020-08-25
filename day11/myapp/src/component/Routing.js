import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import Home from './Home';
import Details from './Details';
import Header from './Header';

const Routing = () => {
    return(
        <BrowserRouter>
            <div>
                <Header/>
                <Route exact path="/" component={Home}></Route>
                <Route path="/details" component={Details}></Route>
            </div>
        </BrowserRouter>
    )
}

export default Routing;