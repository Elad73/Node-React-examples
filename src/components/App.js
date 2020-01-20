import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import HomePage from './HomePage';
import AppSeason from './seasons/AppSeason';
import AppPics from './pics/AppPics';
import AppSongs from './songs/AppSongs';
import AppVideos from './videos/AppVideos';

const App = () => {
    return (
        <div className="ui container">
            <BrowserRouter>
                <Header />
                <div>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/seasons" exact component={AppSeason} />
                    <Route path="/pics" exact component={AppPics} />
                    <Route path="/songs" exact component={AppSongs} />
                    <Route path="/videos" exact component={AppVideos} />
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;