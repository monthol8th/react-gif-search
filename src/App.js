import React from 'react';
import request from 'superagent';

import SearchBar from './components/SearchBar';
import GifList from './components/GifList';
import GifModal from './components/GifModal';

import './styles/app.css'

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            gifs: [],
            selectedGif: null,
            modalIsOpen: false
        }
    }

    openModal(gif) {
        this.setState({
            modalIsOpen: true,
            selectedGif: gif
        });
    }

    closeModal(gif) {
        this.setState({
            modalIsOpen: false,
            selectedGif: null
        });
    }

    handleTermChange(term) {
        const url = `http://api.giphy.com/v1/gifs/search?q=${term.replace(/\s/g, '+')}&api_key=dc6zaTOxFJmzC`;

        request.get(url, (err, res) => {
          this.setState({ gifs: res.body.data })
        });

    }

    render() {
        return (
            <div>
                <SearchBar  onTermChange={this.handleTermChange.bind(this)} />
                <GifList    gifs={this.state.gifs}
                            onGifSelect={this.openModal.bind(this) } />
                <GifModal   modalIsOpen={this.state.modalIsOpen}
                            selectedGif={this.state.selectedGif}
                            onRequestClose={this.closeModal.bind(this)} />
            </div>
        );
    }
}

export default App;
