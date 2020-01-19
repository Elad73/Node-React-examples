import React from 'react';
import { Link } from 'react-router-dom';

class HomePage extends React.Component {
    render() {
        return (
            <div className="ui container">
                <p>
                    <h1 class="ui header">Projects</h1>
                </p>
                <div class="ui horizontal divider">
                    Season
                </div>
                <div className="ui raised very padded text container segment">
                    <p className="item">
                        <div>
                            <Link to="/seasons">Season</Link>
                        </div>
                    </p>
                </div>
            </div>
        );
    }
}

export default HomePage;