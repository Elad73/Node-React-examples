import React from 'react';
import appConfig from './appConfig';
import SearchBar from './components/SearchBar';
import youtube from './api/youtube';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';

class AppVideos extends React.Component {
    state = { videos: [], selectedVideo: null};

    componentDidMount(){
        
        this.onTermSubmit(appConfig.DEFAULT_SEARCH_TERM);
    };

    onTermSubmit = async term => {
        console.log("onTermSubmit:----------------------------------->");
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });

        console.log("response:----------------------------------->" + response);

        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        });
    };

    onVideoSelect = video => {
        this.setState({ selectedVideo: video});
    };


    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList 
                                onVideoSelect={this.onVideoSelect} 
                                videos={this.state.videos} 
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AppVideos;