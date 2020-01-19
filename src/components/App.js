import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import HomePage from './HomePage';
import AppSeason from './seasons/AppSeason';
import AppPics from './pics/AppPics';

const App = () => {
    return (
        <div className="ui container">
            <BrowserRouter>
                <Header />
                <div>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/seasons" exact component={AppSeason} />
                    <Route path="/pics" exact component={AppPics} />
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;