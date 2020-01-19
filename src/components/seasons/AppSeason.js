import React from 'react';
import SeasonDisplay from './SeasonDisplay';
import Loader from './Loader';

class AppSeason extends React.Component {
    
    state = { lat: null, errorMessage: '' }; //this is the state object 

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState( { lat: position.coords.latitude } ),
            err => this.setState( {errorMessage: err.message})
        );
    }

    renderContent() {

        if(this.state.errorMessage && !this.state.lat){
            return <div>Error: {this.state.errorMessage}</div>
        }

        if(!this.state.errorMessage && this.state.lat){
            return <SeasonDisplay lat={this.state.lat}/>
        }

        return <Loader message="Please accept location request"/>;
    }

    //react says we have to deifn render!!!
    render() {
        return (
            <div className="ui raised very padded text container segment">
                {this.renderContent()}
            </div>
        )
    }
}

export default AppSeason;
