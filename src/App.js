import React from 'react';
import request from 'superagent';

import SearchBar from './components/SearchBar';
import GifList from './components/GifList';

import './styles/app.css'

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            gifs: []
        }
    }

    handleTermChange(term) {
        const url = `http://api.giphy.com/v1/gifs/search?q=${term.replace(/\s/g, '+')}&api_key=dc6zaTOxFJmzC`;

        request.get(url, (err, res) => {
          this.setState({ gifs: res.body.data })
        });

    }

    render() {
        return (
            <div className="greeting">
                <SearchBar onTermChange={this.handleTermChange.bind(this)} />
                <GifList gifs={this.state.gifs} />
            </div>
        );
    }
}

export default App;
